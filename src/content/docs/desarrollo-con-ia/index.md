---
title: Manual de desarrollo moderno con IA
description: Cómo se desarrolla software hoy con git, GitHub, Docker, SDD, CI/CD y Claude, para quien programó hace años.
sidebar:
  order: 0
---

## Cómo usar este manual

Este manual recoge, paso a paso y con casos reales, cómo se desarrolla software hoy con ayuda de IA. Está pensado para alguien que sabe pensar como ingeniero pero lleva años sin programar y quiere ponerse al día con las herramientas y prácticas actuales. No explica fundamentos de programación: parte de que ya los conociste y se centra en lo que ha cambiado.

Cada capítulo sigue los mismos seis apartados: para qué sirve, lo esencial, el paso a paso con comandos reales, un prompt de demo para Claude Code, una lista para validar el resultado y los errores que cometimos al aprender. Los errores se quedan a propósito, porque son lo que más enseña.

El trabajo se reparte entre dos sitios:

- **El chat de Claude**, para entender conceptos, decidir y documentar. Aquí se escribe este manual.
- **La terminal en VS Code con Claude Code**, para hacer: clonar repos, escribir código, ejecutar comandos y subir cambios.

Una regla de oro cuando dos sitios tocan el mismo repositorio: antes de empezar a trabajar en uno, `git pull` para traer lo que se hizo en el otro.
