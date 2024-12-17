type User = {
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  time: string;
  phoneNumbers: string[];
  emails: string[];
  dateOfBirth: string;
  currentCompany: string;
  address: string;
  bloodGroup: string;
  portfolio: string;
  instagram: string;
  facebook: string;
  twitter: string;
  youtube: string;
  linkedin: string;
};

type UsersResponse = {
  [key: string]: User;
};

export type { User, UsersResponse };
