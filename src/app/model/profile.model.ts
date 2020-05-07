import { UserResponseModel } from './user-response.model';
import { CityModel } from './city.model';

export class ProfileModel {
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  website: string;
  location: CityModel;
  customSectionTitle: string;
  customSectionContent: string;
  instagram: string;
  facebook: string;
  twitter: string;
  youtube: string;
  soundcloud: string;
  flickr: string;
  telegram: string;
  publicId: string;
  valid: boolean;
  user: UserResponseModel;
}
