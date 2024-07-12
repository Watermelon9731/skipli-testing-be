export interface EntityFavorite {
  favorite_id: string;
  user_id: string;
  profiles: EntityFavoriteProfile[];
}

export interface EntityFavoriteProfile {
  login: string;
  id: string;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  repos_url: string;
}
