import { ChainIDs, includesPolygonChainID } from '../src';

describe('function', () => {
  it('should return true', () => {
    expect(includesPolygonChainID(ChainIDs.POLYGON, ChainIDs.MUMBAI)).toEqual(
      true
    );
  });

  it('should return true', () => {
    expect(
      includesPolygonChainID(ChainIDs.ARBITRUM_GOERLI, ChainIDs.MUMBAI)
    ).toEqual(true);
  });

  it('should return false', () => {
    expect(
      includesPolygonChainID(ChainIDs.ARBITRUM_GOERLI, ChainIDs.ARBITRUM_GOERLI)
    ).toEqual(false);
  });
});
