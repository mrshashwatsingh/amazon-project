import { getProduct, products } from '../../data/products.js';

describe('test suite: products', () => {
  it('contains all products', () => {
    expect(products.length).toEqual(42);
  });
  
  it('works with Product class', () => {
    const product = getProduct('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    
    expect(product.extraInfoHTML()).toEqual('');
  });
  
  it('works with Clothing class', () => {
    const product = getProduct('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
    
    expect(product.extraInfoHTML()).toContain('Size Chart');
  });
  
  it('works with Appliance class', () => {
    const product = getProduct('54e0eccd-8f36-462b-b68a-8182611d9add');
    
    expect(product.extraInfoHTML()).toContain('Instructions');
    expect(product.extraInfoHTML()).toContain('Warranty');
  });
});