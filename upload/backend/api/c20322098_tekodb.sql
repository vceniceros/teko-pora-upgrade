-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-01-2023 a las 15:57:51
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `c20322098_tekodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `subtitle` varchar(150) NOT NULL,
  `descrip` text NOT NULL,
  `img` varchar(150) NOT NULL,
  `img1` varchar(150) NOT NULL,
  `img2` varchar(150) DEFAULT NULL,
  `img3` varchar(150) DEFAULT NULL,
  `img4` varchar(150) DEFAULT NULL,
  `img5` varchar(150) DEFAULT NULL,
  `img6` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id`, `title`, `subtitle`, `descrip`, `img`, `img1`, `img2`, `img3`, `img4`, `img5`, `img6`) VALUES
(1, 'Construcción de una escuela', 'Proyecto escuela en territorio Mbya guaraní', 'Es el proyecto principal de la Fundación garantizar el derecho constitucional (ART: 75 / Inc:17) de la educación gratuita y laica respetando su cultura, su cosmovisión y su identidad étnica\n\nEl BOP 117, es un proyecto creado por la Presidente de la fundación, con el coofundador, autor del primer diccionario y el primer profesor Mbya guaraní, con el firme propósito de garantizar que los niños Mbya guaraní puedan gozar en su territorio de escuelas que garanticen sus derechos como lo son salud, educación y una alimentación adecuada.\n\nPara ello, Javier Rodas Dir. de la escuela EIB N° 941 con mas de 20 años de dedicación absoluta con la educación primaria y la Directora del BOP 117 Presidente de la Fundación trabajan incansablemente para garantizar estos derechos', 'https://imagizer.imageshack.com/v2/xq90/922/sstZbB.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/f5NcAI.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/jhNOIl.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/BazRtO.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/j0vcZl.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/CnOyeH.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/sstZbB.jpg'),
(2, 'Madrinazgo de la embajadora para la paz', 'Madrinazgo de la embajadora para la paz “plantemos arboles, sembremos vida”', 'Desde que se gesto la idea de la fundación, este grupo de mujeres tiene como objetivo gestionar toda ayuda de proyectos, financiamientos y subsidios que logren minimizar la cruel estadística de la pobreza infantil.\n\nEl madrinazgo de la magister Liliana Hernández nos ayudara a la fundación Teko Pora, a la Asociación de mujeres emprendedoras y el equipo de mujeres que trabajamos en pos de garantizar derechos constitucionales a todos los niños, niñas y adolescentes del norte de la provincia de Misiones.', 'https://imagizer.imageshack.com/v2/xq90/922/9phS3F.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/eeqWhz.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/bi8Hkm.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/V81xnI.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/UwD2ib.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/L6jfCt.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/erfbl8.jpg'),
(3, 'Garantizar el acceso a todos los beneficios para pueblos originarios', 'Garantizar el acceso a todos los beneficios para pueblos originarios', 'La fundación fue creada con el objetivo de que todos los beneficios que son destinados a garantizar derechos lleguen y o se hagan efectivos, para ello, con la ayuda del gobierno provincial por medio de un subsidio se gestiona ante organismos gubernamentales y ONGs Nacionales, provinciales e internacionales y proyectos que puedan colaborar con la calidad de vida de los niños, niñas y adolescentes de la nación Mbya Guaraní como asi también los niños, niñas y adolescentes en situación de vulnerabilidad de la zona norte de Misiones con la premisa de aportar el granito de arena para asegurar un futuro digno a los gurises misioneros.', 'https://imagizer.imageshack.com/v2/xq90/922/v0FRIt.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/C5kBN1.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/SqtjAG.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/N3f7LU.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/CgGGsa.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/LuXU8W.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/Y9Fj7i.jpg'),
(4, 'Capacitación permanente en oficios', 'Capacitación en múltiples oficios', 'Es el propósito de la fundación rescatar los saberes ancestrales y socialmente productivos y proveerles de herramientas tecnológicos y rudimentarias para la puesta en valor del arte y su capacidad nata en trabajar la tierra, la artesanía y la medicina alternativa, para ello, el objetivo es proveerles, incentivarles y capacitarles en todos los oficios que ellos se propongan a aprender, fitoterapia, peluquería, jardinería, panadería, robótica, etc.', 'https://imagizer.imageshack.com/v2/xq90/924/nQ27qJ.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/EkwDR9.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/zKwMlK.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/O7QN3b.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/er8FtG.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/JYAVkr.jpg', ''),
(5, 'Prevención de adicciones', 'Talleres y seminarios de prevención de adicciones', 'Trabajando siempre en un enlace intercultural de retroalimentación de saberes y conocimientos. desde el inicio del proyecto en el área educativa con los profesionales pertinentes en educación integral para la salud.\n\nLuego de pertenecer a la red de escuelas hermanadas contando con el apoyo, disposición y colaboración del profesor Julio Pereira se trabaja y se pretende capacitar a docentes alumnos y padres en consumos cuidados y detección temprana de consumos problemáticos.\n\nEs de destacar también, el trabajo con el colega y amigo Hugo López que representa al Ministerio de Prevención de Adicciones donde permanentemente estamos trabajando con talleres, charlas y capacitación para disminuir drásticamente la problemática del consumo que atañe a la mayoría de los jóvenes y se agudizo en las post-pandemia.', 'https://imagizer.imageshack.com/v2/xq90/923/klzqDT.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/UngebI.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/jP09Co.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/xhIzzQ.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/yxgHny.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/Prx1Ln.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/gmEcP5.jpg'),
(6, 'Creación de espacio de primer infancia', 'Creación de espacio de primer infancia', 'Desde sus inicios se viene trabajando para garantizar que las madres que cursan sus estudios secundarios puedan tener a sus hijos en un lugar adecuado que garantice un derecho constitucional tan importante. De la mano del gran colaborador Docente Marcelo Hein logramos articular con SENAF de nación y logramos conveniar los espacios de primera infancia en Andresito e Iguazú hasta el momento es una firme decisión poder seguir conviniendo la mayor cantidad de EPI en las comunidades de la zona norte y centro de la provincia.\n\nPor ello consideramos que es necesario e indispensable la implementación de un CDI, itinerante para poder cumplir con el objetivo principal de la Fundación y así asegurar la concreción de la estimulación temprana en los mitai (niño pequeño); que sus madres puedan concurrir tranquilas a estudiar, ya que sus chiques estarán cuidados y asistidos por un estado presente, activo y promotor de derechos a través de las gestiones de dicha ONG. Con la implementación de un EPI estamos cubriendo una necesidad básica, intercultural en una población que tiene relegada un derecho constitucional, como lo es el cuidado de la primera infancia, en los chiques de las comunidades aborígenes de nuestra provincia.', 'https://imagizer.imageshack.com/v2/xq90/923/iuHiw4.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/inmtQP.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/XkNO7w.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/BRI8ON.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/wxpGEg.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/VbYwdH.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/1NJ3ZW.jpg'),
(7, 'Gestión de herramientas para poner en practica los talleres de oficio', 'Gestión de herramientas', 'En pos de rescatar y poner en practica los saberes ancestrales y socialmente productivos, para volver a nuestro orígenes de cultivar los alimentos cuidando el medio ambiente, es que se gestionan herramientas rudimentarias y tecnológicas utilizando como medio principal la innovación disruptiva, para así romper con el paradigma de la destrucción del medio ambiente y el hábitat.\n\nCon la fuerte premisa de que las nuevas tecnologías nos ayuden a preservar el pulmón de vida y así contribuir a la continuidad de ser capital de la Biodiversidad, es que nosotras gestionamos ante los organismos pertinentes la provisión de las herramientas antes mencionadas.', 'https://imagizer.imageshack.com/v2/xq90/922/syJkPr.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/XAOBgB.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/DxOW4S.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/WJaB6P.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/rwsE32.jpg', '', ''),
(8, 'abrir mas satélites (escuelas)', 'La educación como base de todo', 'La mayoría de este grupo de mujeres tenemos como titulo de base la docencia, es por ello que, la base y el objetivo principal de este proyecto faraónico; como lo es garantizar lo que reza la magna ley de la Republica Argentina(la constitución) en su art. 75/inciso 17, como así también desde la ley 1420 a la 26.206, el acceso a la educación en todos sus niveles gratuita y laica, respetando su cultura, su cosmovisión y su identidad étnica. Tal como lo recita en sus párrafos que el estado debe articular los organismos necesarios es el objetivo de este grupo de mujeres hacer su parte para garantizar este derecho.', 'https://imagizer.imageshack.com/v2/xq90/923/YDETNQ.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/CnOyeH.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/j0vcZl.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/BazRtO.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/jhNOIl.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/f5NcAI.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/sstZbB.jpg'),
(9, 'Trabajar con diferentes organismos nacionales e internacionales', 'Trabajar con diferentes organismos nacionales e internacionales', 'Gracias a la ayuda del gobierno de la provincia de Misiones y sus diferentes ministerios, esta Fundación tiene solvencia y medios para gestionar ante organismos nacionales e internacionales todos los proyectos, programas y beneficios que este grupo de mujeres pueda necesitar para aportar su granito de arena en combatir y erradicar: pobreza, trabajo y maltrato infantil.', 'https://imagizer.imageshack.com/v2/xq90/924/lInprj.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/y5eDgo.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/Fowbyu.jpg', 'https://imagizer.imageshack.com/v2/xq90/924/cslQvv.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/DgvNNO.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/n0r0zA.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/hqeNlM.jpg'),
(10, 'Gestión de un polo de UNILA en puerto Iguazú', 'polo de la UNILA en Puerto Iguazú', 'Desde el comienzo del proyecto, este grupo de docentes se puso en contacto con las autoridades de la UNILA, (Universidad Federal de Integración Latinoamericana) con el objetivo de afianzar vínculos y así poder garantizar el acceso a una Universidad gratuita, para los adolescentes de la zona norte, de la provincia de Misiones, comenzando con un intercambio de proyectos y practicas de docentes de la carrera portugués-español de UNILA en el BOP 117 Reserva Yryapú, y partir de ahí varias reuniones con autoridades del CGE (Consejo General de Educación) y UNILA en un proyecto de convenio provincia-Universidad para carreras de grado.\n\nEste proyecto faraónico seria el máximo logro de la Fundación en beneficio de nuestros gurises.', 'https://imagizer.imageshack.com/v2/xq90/924/kU5rXh.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/3i1mt2.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/YeZnNB.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/xAdx8L.jpg', 'https://imagizer.imageshack.com/v2/xq90/923/mXamWX.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/QLxnMl.jpg', 'https://imagizer.imageshack.com/v2/xq90/922/qaYmnI.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `password`) VALUES
(1, 'admin', 'StRiNg=43628362');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
