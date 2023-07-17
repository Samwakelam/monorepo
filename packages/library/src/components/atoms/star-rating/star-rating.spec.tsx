import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { StarRating } from './star-rating.component';

describe('star-rating.component', () => {
  it('should render the children passed in', () => {
    const starRating = <StarRating />;

    render(starRating);

    expect(screen.getByText('Basic StarRating')).toBeDefined();
  });
});
