---
title: Arquitectura de un retailer en 2026
description: Qué sistemas son núcleo, dónde está la diferencia, quién manda en cada dato y cómo elegir entre suite, mejores de cada categoría o arquitectura componible.
publicado: 2026-09-27
revisado: 2026-09-27
revision_experta:
  nombre: Irene Martín Javaloy
  linkedin: https://www.linkedin.com/in/irene-mart%C3%ADn-javaloy-b3274b72/
sidebar:
  order: 2
---

## La decisión

La dirección tiene que decidir qué sistemas forman el núcleo del negocio, qué sistemas marcan la diferencia frente a la competencia y cómo se hablan entre sí. Mi recomendación es que el núcleo sea lo más estándar (y, si me permites, lo más aburrido) posible, que la diferencia se construya en la capa que toca al cliente y a los datos, y que la integración se trate como un sistema más, con presupuesto y responsable propios, y no como el pegamento que alguien pone al final cuando ya no queda dinero.

## El problema

Un retailer mediano no diseña su arquitectura de sistemas; la hereda de sí mismo. Durante veinte años ha ido comprando un sistema cada vez que aparecía un problema urgente, cada uno elegía con buen criterio para el problema de ese momento, y el resultado conjunto es algo que nadie habría diseñado a propósito: un ERP tan personalizado que nadie se atreve a actualizarlo, unos terminales de venta de otra generación, un e-commerce que funciona como una empresa dentro de la empresa y un puñado de hojas de cálculo haciendo, con admirable dignidad, el trabajo de integración que ningún sistema hace.

Los síntomas se reconocen enseguida. Cambiar un precio obliga a tocar tres sistemas y rezar para que coincidan, dar de alta un producto nuevo tarda días y cada proyecto, sea el que sea, empieza con la misma frase: "primero habría que conectar esto con aquello". Y cuando alguien pide el mapa completo de sistemas, resulta que no existe o que la única persona capaz de dibujarlo trabaja para un proveedor.

El problema no es tener muchos sistemas, porque un retailer moderno necesita bastantes. Es no haber decidido nunca qué papel juega cada uno, quién manda en cada dato y cómo se hablan entre ellos.

## De 2000 a 2026

En 2000 la arquitectura de un retailer cabía en una pizarra: un ERP en el centro, las tiendas alrededor y un fichero que viajaba cada noche entre unos y otros. En 2026 cabe en una pizarra bastante más grande, y lo interesante no es cuántas piezas hay, sino que el centro de gravedad se ha movido del ERP a los datos y a la integración.

| Pieza | Hacia 2000 | En 2026 | Hacia dónde va |
| --- | --- | --- | --- |
| Núcleo de gestión | ERP instalado en local y muy personalizado. Actualizaciones traumáticas cada muchos años | ERP en la nube o gestionado, con el núcleo estándar y las personalizaciones fuera de él | Un ERP más pequeño, centrado en finanzas y compras, rodeado de sistemas especializados |
| Tienda | Terminal de venta con servidor en cada tienda y sincronización nocturna | Venta conectada en tiempo real, también desde el móvil del dependiente, que tiene que seguir cobrando sin conexión. El software de venta es un sistema de facturación sujeto a [VeriFactu](https://www.grantthornton.es/perspectivas/fiscal/verifactu-retrasa-su-entrada-en-vigor-a-2027/) | Cobro en cualquier punto de la tienda y la tienda como almacén cercano al cliente |
| Canal online | Web aparte, con su propio catálogo, su propio stock y su propio equipo | Plataforma de e-commerce conectada a un gestor de pedidos que decide desde dónde se sirve cada pedido | Catálogo y pedido consumidos también por agentes de IA |
| Producto | Ficha en el ERP, completada con hojas de cálculo y catálogos en papel | Un sistema de información de producto como fuente única para todos los canales | Contenido de producto generado con IA y revisado por personas |
| Integración | Ficheros nocturnos y conexiones punto a punto hechas a medida | APIs, eventos y una capa de integración gestionada | Agentes de IA que operan los sistemas a través de esas mismas APIs |
| Datos | Informes del propio ERP y un almacén de datos cargado por la noche | Plataforma de datos en la nube, alimentada casi en tiempo real | Datos preparados para que los consuman modelos de IA, no solo personas |

Como siempre, la última columna es opinión mía. La de 2000, en cambio, es memoria, que es bastante más fiable aunque a veces la echo de menos.

## Lo esencial

Un retailer mediano en 2026 trabaja, con más o menos piezas, con este mapa. Los nombres comerciales cambian cada pocos años; las funciones, bastante menos.

| Sistema | Qué hace | Dato del que suele ser dueño |
| --- | --- | --- |
| ERP (planificación de recursos empresariales) | Finanzas, compras, proveedores y contabilidad | Coste, proveedor, factura |
| TPV (terminal punto de venta) | Venta, cobro y devoluciones en tienda | Ticket de venta en tienda |
| Plataforma de e-commerce | Tienda online, carrito y pago | Sesión y carrito online |
| OMS (sistema de gestión de pedidos) | Recibe pedidos de todos los canales y decide desde dónde se sirven | Pedido y stock disponible para vender |
| SGA (sistema de gestión de almacén) | Entradas, ubicaciones, preparación y expediciones | Stock físico en almacén |
| PIM (gestión de información de producto) | Ficha, atributos, imágenes y textos de cada producto | Información de producto |
| CRM o CDP (gestión de clientes o plataforma de datos de cliente) | Cliente único, fidelización y comunicaciones | Cliente y consentimientos |
| Precios y promociones | Tarifas, promociones y rebajas por canal y tienda | Precio vigente |
| Plataforma de datos y visualización | Reúne datos de todos los sistemas para analizar y decidir | Ninguno: consume, no manda |
| Capa de integración | Mueve datos y eventos entre todos los anteriores | Ninguno: transporta, no manda |

La última columna es la que más dolores de cabeza evita, y la que casi nunca aparece en los documentos de arquitectura. Cada dato importante (producto, precio, stock, cliente, pedido) tiene que tener un solo dueño, un sistema que manda y del que los demás copian. Cuando dos sistemas creen mandar sobre el mismo dato aparecen las tres cifras de ventas del capítulo anterior, y ninguna herramienta de datos, por cara que sea, arregla una discusión que en realidad es de organización. La columna recoge el reparto más habitual, no el único posible; lo importante es que el vuestro esté decidido y escrito.

Sobre ese mapa hay tres formas de construir la arquitectura. La primera es la **suite**, en la que un mismo fabricante cubre la mayoría de las piezas, con integración de serie y un único interlocutor. La segunda son los **mejores de cada categoría**, que elige el sistema más fuerte para cada función y los integra. La tercera es la **arquitectura componible**, en la que las piezas son más pequeñas, se comunican por APIs (interfaces para que un sistema pida o envíe datos a otro) y se pueden sustituir de una en una. En la práctica casi nadie es puro, y lo habitual es una mezcla.

Falta la vieja pregunta de la nube. En 2026 ya no se discute si ir a la nube sino qué se queda fuera de ella, y en retail la respuesta suele ser la tienda. Una tienda que deja de cobrar porque se ha caído la conexión es un problema que ningún ahorro de infraestructura compensa, así que el modelo razonable es híbrido: gestión y datos en la nube, y en la tienda lo necesario para seguir vendiendo sin conexión y sincronizar después.

## Cómo decidir

La decisión no es qué modelo es mejor en abstracto, que es la pregunta favorita de cualquier presentación comercial, sino cuál puede gobernar tu equipo durante los próximos cinco años.

| Modelo | Encaja cuando | Ventaja | Riesgo | Qué exige al equipo |
| --- | --- | --- | --- | --- |
| Suite | El negocio se parece al estándar del sector y el equipo de tecnología es pequeño | Integración de serie, un solo interlocutor, menos piezas que mantener | Dependencia de un fabricante y módulos flojos que vienen en el paquete | Gestionar un proveedor grande y resistir la tentación de personalizar |
| Mejores de cada categoría | Hay dos o tres funciones donde el negocio compite de verdad | Cada función cubierta por un sistema fuerte | La integración se convierte en el proyecto más caro y más frágil | Capacidad real de integración y de gestión de varios proveedores |
| Componible | La capa de cliente cambia a menudo y hay equipo propio de desarrollo | Sustituir piezas sin rehacer el conjunto | Complejidad que crece más rápido que el valor que aporta | Arquitectos y desarrolladores propios, y gobierno técnico continuo |

Para cada pieza del mapa hay una pregunta que suele aclarar bastante: si un competidor hace lo mismo con el mismo sistema, ¿pierdes algo? Si la respuesta es no, esa pieza es núcleo y se compra estándar, sin personalizar más de lo imprescindible. Si la respuesta es sí, ahí está tu diferencia y merece la pena invertir en ella.

Mi recomendación para un retailer mediano, y aquí es opinión, es un núcleo en suite o con muy pocas piezas (finanzas, compras, almacén y tienda) y una capa de cliente algo más componible, solo si hay equipo para gobernarla. La arquitectura componible completa es estupenda en las conferencias y en las empresas que pueden pagar el equipo que la sostiene, que no suelen ser las medianas. Y en cualquiera de los tres modelos, la integración y el reparto de datos se deciden antes de elegir sistemas, no después.

## Errores frecuentes

**Personalizar el núcleo hasta hacerlo irrepetible.** Cada personalización del ERP parecía razonable cuando se pidió, y la suma convierte cada actualización en un proyecto de meses que se aplaza hasta que el fabricante deja de dar soporte. Se ve venir cuando la respuesta a "¿por qué no actualizamos?" empieza por "es que lo nuestro es especial". Las particularidades del negocio van fuera del núcleo, conectadas por APIs.

**Comprar arquitectura componible sin equipo para gobernarla.** Sobre el papel es flexibilidad; en la práctica son doce proveedores, doce contratos y ninguna persona que entienda cómo encaja todo. Si no hay arquitectos propios, la flexibilidad la acaba gestionando el proveedor, que no siempre tiene tus mismos intereses.

**No decidir quién manda en cada dato.** Se nota en las reuniones donde se discute qué cifra es la buena en lugar de qué hacer con ella. Se arregla con una tabla de una página, firmada por negocio y tecnología, que dice qué sistema es dueño de cada dato.

**Tratar la integración como una partida residual.** Se presupuestan los sistemas con todo detalle y la integración aparece como una línea al final, generalmente la primera que se recorta. Después resulta ser una de las partes más grandes del proyecto, y la que genera más incidencias.

**Olvidar la tienda sin conexión.** La arquitectura en la nube luce muchísimo en la presentación hasta el primer sábado de rebajas en que cae la línea de una tienda. Pregunta siempre qué pasa en la tienda si se pierde la conexión dos horas, y exige que alguien lo haya probado.

**Cambiarlo todo a la vez.** Sustituir ERP, venta en tienda y e-commerce en el mismo proyecto multiplica el riesgo y deja al negocio sin plan B. Por partes, empezando por la integración y los datos maestros, es más lento y bastante más sano.

**Que el mapa solo exista en la cabeza de un proveedor.** Si para saber qué sistemas tienes y cómo se conectan hay que llamar a alguien de fuera, la arquitectura no es tuya, aunque la pagues tú.

## Preguntas para el comité

Siete preguntas que no requieren saber qué es una API y que, curiosamente, suelen incomodar más que cualquier pregunta técnica.

1. ¿Tenemos un mapa de sistemas actualizado? ¿Quién lo mantiene?
2. ¿Qué sistema manda en el producto, el precio, el stock, el cliente y el pedido? ¿Está escrito?
3. ¿Cuánto tarda un cambio de precio en llegar a todas las tiendas y a la web?
4. ¿Qué pasa en una tienda si se cae la conexión dos horas? ¿Lo hemos probado?
5. ¿Qué parte del ERP está personalizada y cuánto nos cuesta cada actualización?
6. ¿La integración tiene presupuesto y responsable propios?
7. ¿Podríamos cambiar de plataforma de e-commerce sin rehacer medio sistema?

Si al dibujar el mapa te sale algo parecido a un plato de espaguetis, tranquilo, es lo habitual. Escríbeme a cafe@germantalon.com y lo desenredamos con un café.
