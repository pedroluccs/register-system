'use client';

import React, { useState, useRef } from 'react';
import { StyleSheetManager, ServerStyleSheet } from 'styled-components';
import { useServerInsertedHTML } from 'next/navigation';

export default function StyledComponentsRegistry({
children,
}: {
children: React.ReactNode;
}) {
const [sheet] = useState(() => new ServerStyleSheet());
const hasInserted = useRef(false);

useServerInsertedHTML(() => {
    if (!hasInserted.current) {
    hasInserted.current = true;
    return (
        <>
        {sheet.getStyleElement()}
        </>
    );
    }
    return null;
});

return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>;
}
