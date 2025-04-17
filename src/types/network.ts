type Language = 'ru' | 'en' | 'undefined';

type EntitiesPersons = Array<string>;
type EntitesLocations = Array<string>;

interface FuzzyMatchedItem {
  matched: string;
  suggestion: string;
  score: number;
}

type FuzzyMatched = Array<FuzzyMatchedItem>;

type FuzzyMatchedPersons = FuzzyMatched;
type FuzzyMatchedLocations = FuzzyMatched;

interface Entities {
  persons: EntitiesPersons;
  locations: EntitesLocations;
}

interface Fuzzy {
  persons: FuzzyMatchedPersons;
  locations: FuzzyMatchedLocations;
}

interface AnalyzeTextRequest {
  text: string;
}

interface AnalyzeTextSuccessResponse {
  language: Language;
  entities: Entities;
  fuzzy_matched: Fuzzy;
}

interface AnalyzeTextErrorResponse {
  error: string;
}

export { AnalyzeTextErrorResponse, AnalyzeTextRequest, AnalyzeTextSuccessResponse };
