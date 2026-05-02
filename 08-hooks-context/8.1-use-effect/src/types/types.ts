export interface User {
  id: number;
  name: string;
}

export interface UserDetailsData {
  id: number;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}