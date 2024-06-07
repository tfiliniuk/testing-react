import {render, screen} from '../../test-utils';
import {MuiModel} from './mui-model';

describe('MuiModel', () => {
    test('renders text correctly', () => {
        render(<MuiModel />);
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark model');
    });
});
