// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
import { RenderPages } from '../pages/garage';

describe("Test of Garage", function() {
  it('should return HTML Element', function() {
    document.body.innerHTML = '';
    const myGarage = new RenderPages();
    myGarage.renderElement('header', document.body, 'header', 'header');

    const validateElement = document.getElementById('header');
    expect(validateElement).toBeDefined();
    
  })
  it('should return HTML Element class', function() {
    
    const body = '<body data-testid="parent"></body>';
    document.body.innerHTML = '';
    const myGarage = new RenderPages();
    myGarage.renderElement('header', document.body, 'header', 'header');
    const validateElement = document.getElementById('header');
    expect(validateElement).toHaveClass("header");
  })
})
