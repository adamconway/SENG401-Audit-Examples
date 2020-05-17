import UserRepository from "./UserRepository";
import TravellerRepository from "./TravellerRepository";

// Add all repositories here to access from anywhere
const repositories = {
  user: UserRepository,
  traveller: TravellerRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
