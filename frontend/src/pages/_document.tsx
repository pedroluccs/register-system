import { AppProps } from 'next/app';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
        ctx.renderPage = () =>
            originalRenderPage({
            enhanceApp: (App: React.ComponentType<AppProps>) => (props: React.ComponentProps<typeof App>) =>
                sheet.collectStyles(<App {...props} />),
            });

    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: (
        <>
            {initialProps.styles}
            {sheet.getStyleElement()}
        </>
        ),
    };
    } finally {
    sheet.seal();
    }
}

render() {
    return (
    <Html lang="pt-BR">
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
    </Html>
    );
}
}
