export const home = 'home';
export const search = 'search';
export const featured = 'featured';
export const team = 'team';
export const navigationOptions = [home, search, featured, team] as const;
export type NavigationOption = typeof navigationOptions[number];

export const userReadableNavigationOptions: {
  [option in NavigationOption]: string
} = {
  home: 'Home',
  search: 'Search',
  featured: 'Featured Pokemon',
  team: 'My Team'
};
