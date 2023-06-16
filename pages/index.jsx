import Head from "next/head";
import dynamic from "next/dynamic";
import Intro from "@/components/Intro/Intro";
import RoyalService from "@/components/RoyalService/RoyalService";
import Architecture from "@/components/ArchitectureComponents/Architecture";
import Location from "@/components/LocationComponents/Location";
import ResidentialComplex from "@/components/ResidentialComplex/ResidentialComplex";
import Description from "@/components/Description/Description";
import Landscaping from "@/components/Landscaping/Landscaping";
import { Planning } from "@/components/Planning/Planning";
import CallBack from "@/components/CallBackHun/CallBack";
import ContactUs from "@/components/ContactUs/ContactUs";
import PlanningMobile from "@/components/PlaningMobile/PlanningMobile";

const AroundViewer = dynamic(
  () =>
    import("../components/AroundViewer/AroundViewer").then(
      (res) => res.AroundViewer
    ),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Brooklyn</title>
        <meta name="description" content="Brooklyn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Brooklyn" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="
          Строительство
          Ремонт и отделка
          Архитектура и проектирование
          Новостройки
          Коммерческая недвижимость
          Жилая недвижимость
          Промышленное строительство
          Инженерные сети и коммуникации."
        />

        <meta
          name="
          Brooklyn, brooklyn, BROOKLYN, Brooklyn-Royal, Royal-Brooklyn, royal, ROYAL, Royal-SnowFlake
          SnowFlake, SNOWFLAKE, snowflake,Snowflake, snowFlake,
          Snow Flake, SNOW FLAKE, snow flake, snow Flake, Snow flake,
          Snow-Flake, SNOW-FLAKE, snow-flake,Snow-flake, snow-Flake,
          Snow - Flake, SNOW - FLAKE, snow - flake,Snow - flake, snow - Flake,
          Snow, SNOW, snow,
          Flake, FLAKE, flake,
          Dev SnowFlake, SnowFlake dev"
          content="
                Строительство
                Ремонт и отделка
                Архитектура и проектирование
                Новостройки
                Коммерческая недвижимость
                Жилая недвижимость
                Промышленное строительство
                Инженерные сети и коммуникации
                Строительные материалы и оборудование
                Управление проектами и строительными работами
                Безопасность на строительных объектах
                Экологические аспекты строительства
                Строительные технологии и инновации
                Финансовые аспекты строительства
                Юридические аспекты строительства.
                Капитальный ремонт и реконструкция зданий
                Строительство дорог и мостов
                Производство строительных материалов
                Энергоэффективное строительство
                Строительство объектов инфраструктуры
                Благоустройство и ландшафтный дизайн
                Проектно-изыскательские работы
                Аренда спецтехники и оборудования для строительства
                Разработка и согласование проектной документации
                Строительство промышленных и складских комплексов
                Консультационные услуги в сфере строительства
                Оценка стоимости строительства и сметное проектирование
                Управление энергетической эффективностью зданий
                Строительство коттеджей и загородных домов
                Строительство объектов социальной инфраструктуры (школы, больницы и т.д.).
              "
        ></meta>

        <meta
          name="Строительная компания, Строительство, Новостройки, Недвижимость, Жилая недвижимость"
          content="
          Строительство является комплексным процессом, включающим различные аспекты.
           Это включает в себя ремонт и отделку, архитектуру и проектирование,
            строительство новостроек, коммерческую и жилую недвижимость,
             а также промышленное строительство.
              Важным элементом является разработка инженерных сетей и коммуникаций,
               а также использование подходящих строительных материалов и оборудования.

          Управление проектами и строительными работами,
           а также обеспечение безопасности на строительных объектах,
            играют ключевую роль в успешном завершении проектов.
             Экологические аспекты строительства, строительные технологии и инновации,
              а также финансовые и юридические аспекты также необходимы для учета.
          
          В рамках строительства важными являются также капитальный ремонт и реконструкция зданий,
           строительство дорог и мостов, производство строительных материалов,
            а также энергоэффективное строительство и создание инфраструктурных объектов.
             Благоустройство и ландшафтный дизайн, проектно-изыскательские работы,
              аренда спецтехники и оборудования для строительства также являются важными составляющими.
          
          Разработка и согласование проектной документации,
           строительство промышленных и складских комплексов,
            консультационные услуги, оценка стоимости строительства и сметное проектирование,
             а также управление энергетической эффективностью зданий - все это имеет важное значение в сфере строительства.
          
          Строительство коттеджей и загородных домов, а также объектов социальной инфраструктуры,
           таких как школы и больницы, также входят в широкий спектр деятельности в строительной отрасли.
              "
        ></meta>

        <meta
          name="keywords"
          content="
          Строительство, ремонт и отделка, архитектура и проектирование, новостройки,
          коммерческая и жилая недвижимость, промышленное строительство,
          инженерные сети и коммуникации, строительные материалы и оборудование,
          управление проектами и строительными работами, безопасность на строительных объектах,
          экологические и финансовые аспекты строительства, юридические вопросы,
          капитальный ремонт и реконструкция зданий, строительство дорог и мостов,
          производство строительных материалов, энергоэффективное строительство,
          инфраструктурные объекты, благоустройство и ландшафтный дизайн,
          проектно-изыскательские работы, аренда спецтехники и оборудования,
          разработка и согласование проектной документации, промышленные и складские комплексы,
          консультационные услуги, оценка стоимости и сметное проектирование,
          энергетическая эффективность зданий, строительство коттеджей и загородных домов,
          объекты социальной инфраструктуры (школы, больницы и другие).

          Строительство — это важная и многогранная отрасль,
           которая играет ключевую роль в развитии инфраструктуры и обеспечении потребностей общества.
            Она охватывает широкий спектр деятельности,
             начиная от строительства новых зданий и сооружений до ремонта и реконструкции существующих объектов.

Один из основных направлений в строительстве — это ремонт и отделка,
 которые позволяют обновить и преобразить существующие помещения, придав им новый облик и функциональность.
  Архитектура и проектирование важны для создания эстетически привлекательных и функциональных зданий,
   которые соответствуют потребностям клиентов.

Новостройки представляют собой создание современных жилых и коммерческих объектов с использованием передовых строительных технологий и материалов.
 Коммерческая недвижимость включает в себя офисные здания, розничные объекты, гостиницы и другие коммерческие сооружения,
  которые служат бизнесу и экономике.

Жилая недвижимость охватывает строительство и продажу жилых помещений,
 включая квартиры, дома, коттеджи и загородные участки.
  Промышленное строительство связано с разработкой и строительством промышленных объектов,
   таких как заводы, склады, производственные площадки,
    которые обеспечивают производственную деятельность различных отраслей экономики.

Инженерные сети и коммуникации играют важную роль в обеспечении эффективной работы зданий и сооружений.
 Это включает в себя системы электроснабжения, отопления, вентиляции,
  кондиционирования воздуха, водоснабжения, канализации и другие инженерные коммуникации.

Строительные материалы и оборудование являются неотъемлемой частью любого строительного процесса.
 Они включают в себя различные материалы, такие как кирпич, бетон, сталь,
  а также строительную технику и инструменты, необходимые для выполнения строительных работ.
              "
        ></meta>

        <meta
          name="keywords"
          content="
          Строительство, ремонт и отделка, архитектура и проектирование, новостройки,
          коммерческая и жилая недвижимость, промышленное строительство,
          инженерные сети и коммуникации, строительные материалы и оборудование,
          управление проектами и строительными работами, безопасность на строительных объектах,
          экологические и финансовые аспекты строительства, юридические вопросы,
          капитальный ремонт и реконструкция зданий, строительство дорог и мостов,
          производство строительных материалов, энергоэффективное строительство,
          инфраструктурные объекты, благоустройство и ландшафтный дизайн,
          проектно-изыскательские работы, аренда спецтехники и оборудования,
          разработка и согласование проектной документации, промышленные и складские комплексы,
          консультационные услуги, оценка стоимости и сметное проектирование,
          энергетическая эффективность зданий, строительство коттеджей и загородных домов,
          объекты социальной инфраструктуры (школы, больницы и другие).
              "
        ></meta>

        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <main>
        <Intro />
        <RoyalService />
        <Architecture />
        <ContactUs text="ПОЛУЧИТЕ БОЛЕЕ ОБШИРНУЮ ИНФОРМАЦИЮ!" />
        <ResidentialComplex />
        <Description />
        <Landscaping />
        <ContactUs
          text="ОСТАЛИСЬ ВОПРОСЫ?"
          text2="С УДОВОЛЬСТВИЕМ НА НИХ ОТВЕТИМ!"
        />
        <Planning />
        <PlanningMobile />
        <AroundViewer />
        <Location />
        <CallBack />
      </main>
    </>
  );
}
