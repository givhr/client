export interface ReachRouterProps {
  href: string;
  isCurrent: boolean;
  isPartiallyCurrent: boolean;
  location: object;
}

export const isPartiallyActive = ({ isPartiallyCurrent }: ReachRouterProps) => {
  console.log('isPartiallyActive PROPS: ', isPartiallyCurrent);
  // return isPartiallyActive && { className: 'active' };
};
