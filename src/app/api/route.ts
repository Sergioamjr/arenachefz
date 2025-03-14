import * as contentful from 'contentful';
import { NextResponse } from 'next/server';

const client = contentful.createClient({
  space: process.env.SPACE_ID ?? '',
  accessToken: process.env.TOKEN ?? '',
});

const getFields = ({ fields, sys }: any) => {
  return {
    ...fields,
    id: fields?.id || sys.id,
  };
};

const getItems = ({ items }: any) => {
  return items.map(getFields);
};

const restaurantesId = 'restaurantes';
const destaquesId = 'destaques';
const comodidadesId = 'comodidades';
const esportesDeAreiaId = '1eg4IKOAGLDOB6USnArV6k';
const facaSeueventoId = '2W8cOiSTeC4TtXjf4nEcr0';
const happyHourId = '1RAH1iRibWl2ZgiGLSlIsw';
const menuId = 'menu';
// const seoId = '';
const bannerId = '8euEn6bJxevGVSW7xGIUx';
const localizacaoId = 'BH6npEHGf9GZdEaTpF1pm';

export async function GET() {
  // const response = await client.getEntry('8euEn6bJxevGVSW7xGIUx');
  const [destaques, comodidades, restaurantes, menu] = await Promise.all(
    [destaquesId, comodidadesId, restaurantesId, menuId].map((item) => client.getEntries({ content_type: item }))
  );

  const [esportesDeAreia, facaSeuEvento, happyHour, localizacao, banner] = await Promise.all(
    [esportesDeAreiaId, facaSeueventoId, happyHourId, localizacaoId, bannerId].map((item) => client.getEntry(item))
  );

  return NextResponse.json(
    {
      destaques: getItems(destaques),
      comodidades: getItems(comodidades),
      restaurantes: getItems(restaurantes),
      menu: getItems(menu),
      esportesDeAreia: getFields(esportesDeAreia),
      facaSeuEvento: getFields(facaSeuEvento),
      happyHour: getFields(happyHour),
      banner: getFields(banner),
      localizacao: getFields(localizacao),
    },
    { status: 200 }
  );
}
