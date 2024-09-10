import { useState } from 'react';

export default function useSearchQuery(initialValue = '') {
    const [query, setQuery] = useState(initialValue);
    return [query, setQuery];
}
