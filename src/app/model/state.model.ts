import { CountryModel } from './country.model';

export class StateModel {
  id: number;
  name: string;
  country: CountryModel;
}
