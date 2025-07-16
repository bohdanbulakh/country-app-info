export class CountryResponse {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: CountryResponse[] | null;
}
