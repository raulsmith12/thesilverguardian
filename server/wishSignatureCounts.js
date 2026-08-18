const { getDatabasePool } = require("./database");

const cityAliases = {
  Anaheim: ["anaheim", "anaheim ducks", "ducks"],
  Boston: ["boston", "boston bruins", "bruins"],
  Buffalo: ["buffalo", "buffalo sabres", "sabres"],
  Calgary: ["calgary", "calgary flames", "flames"],
  Chicago: ["chicago", "chicago blackhawks", "blackhawks"],
  Columbus: ["columbus", "columbus blue jackets", "blue jackets"],
  Dallas: ["dallas", "dallas stars", "stars"],
  Denver: ["denver", "colorado", "colorado avalanche", "avalanche"],
  Detroit: ["detroit", "detroit red wings", "red wings"],
  Edmonton: ["edmonton", "edmonton oilers", "oilers"],
  "Long Island": ["long island", "new york islanders", "ny islanders", "islanders"],
  "Los Angeles": ["los angeles", "la kings", "los angeles kings", "kings"],
  Montreal: ["montreal", "montréal", "montreal canadiens", "canadiens", "habs"],
  Nashville: ["nashville", "nashville predators", "predators"],
  "New Jersey": ["newark", "new jersey", "new jersey devils", "devils"],
  "New York": ["new york", "new york rangers", "ny rangers", "rangers"],
  Ottawa: ["ottawa", "ottawa senators", "senators", "sens"],
  Philadelphia: ["philadelphia", "philadelphia flyers", "flyers"],
  Pittsburgh: ["pittsburgh", "pittsburgh penguins", "penguins", "pens"],
  Carolina: ["raleigh", "carolina", "carolina hurricanes", "hurricanes", "canes"],
  Utah: ["salt lake city", "salt lake", "utah", "utah mammoth", "mammoth", "utah hockey club"],
  "San Jose": ["san jose", "san jose sharks", "sharks"],
  Seattle: ["seattle", "seattle kraken", "kraken"],
  "St. Louis": ["st louis", "st. louis", "st louis blues", "st. louis blues", "blues"],
  Minnesota: ["st paul", "st. paul", "minnesota", "minnesota wild", "wild"],
  Florida: ["sunrise", "florida", "florida panthers", "panthers"],
  Tampa: ["tampa", "tampa bay", "tampa bay lightning", "lightning", "bolts"],
  Toronto: ["toronto", "toronto maple leafs", "maple leafs", "leafs"],
  Vancouver: ["vancouver", "vancouver canucks", "canucks"],
  Vegas: ["vegas", "las vegas", "vegas golden knights", "golden knights"],
  "Washington DC": ["washington", "washington dc", "washington capitals", "capitals", "caps"],
  Winnipeg: ["winnipeg", "winnipeg jets", "jets"],
};

function normalizeFavoriteTeam(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const aliasMatchers = Object.entries(cityAliases)
  .flatMap(([city, aliases]) => aliases.map((alias) => ({
    city,
    alias: normalizeFavoriteTeam(alias),
  })))
  .sort((left, right) => right.alias.length - left.alias.length);

function matchFavoriteTeam(value) {
  const favorite = normalizeFavoriteTeam(value);
  if (!favorite) return null;

  const paddedFavorite = ` ${favorite} `;
  return aliasMatchers.find(({ alias }) => paddedFavorite.includes(` ${alias} `))?.city ?? null;
}

async function getWishSignatureCounts() {
  const [rows] = await getDatabasePool().query(
    `SELECT LOWER(TRIM(favorite_hockey_team)) AS favorite, COUNT(*) AS signature_count
     FROM petition_signatures
     GROUP BY LOWER(TRIM(favorite_hockey_team))`,
  );
  const counts = Object.fromEntries(Object.keys(cityAliases).map((city) => [city, 0]));

  for (const row of rows) {
    // Resolve each grouped answer once. A value such as "Seattle Kraken"
    // contains both identifiers but still contributes a single signature.
    const city = matchFavoriteTeam(row.favorite);
    if (city) counts[city] += Number(row.signature_count);
  }

  return counts;
}

module.exports = { getWishSignatureCounts, matchFavoriteTeam };
