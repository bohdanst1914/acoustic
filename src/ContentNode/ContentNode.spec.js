import {getByAltText, render} from "@testing-library/react";
import ContentNode from "./ContentNode";

describe('test ContentNode component', () => {
    it('should render text node', function () {
        const testNode = {
            elementType: 'text',
            value: 'Its a text'
        }
        const {getByText, debug} = render(
            <ContentNode node={testNode}/>
        );
        debug()
        expect(getByText('Its a text')).toBeTruthy();
    });

    it('should render datetime node', function () {
        const testNode = {
            elementType: 'datetime',
            value: new Date('2022-02-22 20:22:02')
        }
        const {getByText} = render(
            <ContentNode node={testNode}/>
        );

        expect(getByText('22/02/2022')).toBeTruthy();
    });
    it('should render formattedtext node', function () {
        const testNode = {
            elementType: 'formattedtext',
            values: ['<h1>Hey there</h1>']
        }
        const {getByText} = render(
            <ContentNode node={testNode}/>
        );

        expect(getByText('Hey there')).toBeTruthy();
    });
    it('should render group node', function () {
        const testNode = {
            elementType: 'group',
            value: {
                leadImage: {
                    url: 'test'
                },
                leadImageCaption: {
                    value: 'test value'
                }
            }
        }
        const {getByAltText} = render(
            <ContentNode node={testNode}/>
        );
        const image = getByAltText('test value');
        expect(image).toBeTruthy();
        expect(image.src).toContain('test')
    });
    it('should render error node', function () {
        const testNode = {
            elementType: 'error',
        }
        const {getByText} = render(
            <ContentNode node={testNode}/>
        );
        expect(getByText('Error')).toBeTruthy();
    });
})