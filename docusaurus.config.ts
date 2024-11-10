import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: 'Inferno Collection',
	tagline: 'Where all the Fire/EMS magic happens',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://docs.inferno-collection.com/',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: '', // Usually your GitHub org/user name.
	projectName: '', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang.
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					routeBasePath: '/',
					editUrl: ({versionDocsDirPath, docPath}) =>
						`https://github.com/inferno-collection/Docs/edit/master/${versionDocsDirPath}/${docPath}`,
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/banner.jpg',
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: true,
		},
		navbar: {
			title: 'Inferno Collection',
			logo: {
				alt: 'Inferno Collection',
				src: 'img/logo.png',
			},
			items: [
				{
					type: 'docSidebar',
					sidebarId: 'docsSidebar',
					position: 'left',
					label: 'Docs',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Fire Alarm Reborn',
							to: '/fire-alarm-reborn',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Website',
							href: 'https://inferno-collection.com/',
						},
						{
							label: 'Discord',
							href: 'https://inferno.gay/discord',
						},
						{
							label: 'YouTube',
							href: 'https://inferno.gay/yt',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Store',
							href: 'https://store.inferno-collection.com/',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/inferno-collection/',
						},
					],
				},
			],
			copyright: `Copyright © 2019-${new Date().getFullYear()} Inferno Collection.<br>Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
	plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
