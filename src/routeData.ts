import { defineRouteMiddleware, type StarlightRouteData } from '@astrojs/starlight/route-data';

type SidebarEntry = StarlightRouteData['sidebar'][number];

// Quita de la barra lateral los grupos sin páginas. En producción los borradores
// no existen, así que una parte de un manual con todos sus capítulos en borrador
// se quedaría como una cabecera vacía.
function withoutEmptyGroups(entries: SidebarEntry[]): SidebarEntry[] {
	return entries.flatMap((entry) => {
		if (entry.type !== 'group') return [entry];
		const children = withoutEmptyGroups(entry.entries);
		return children.length > 0 ? [{ ...entry, entries: children }] : [];
	});
}

export const onRequest = defineRouteMiddleware((context) => {
	const route = context.locals.starlightRoute;
	route.sidebar = withoutEmptyGroups(route.sidebar);
});
