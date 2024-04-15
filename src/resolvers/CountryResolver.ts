import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Country } from '../entities/Country';
import { getConnection } from 'typeorm';

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return await getConnection().getRepository(Country).find();
  }

  @Query(() => Country, { nullable: true })
  async country(@Arg('code') code: string): Promise<Country | null | undefined> {
    return await getConnection().getRepository(Country).findOne({ where: { code } });
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg('code') code: string,
    @Arg('name') name: string,
    @Arg('emoji') emoji: string,
    @Arg('continent') continent: string
  ): Promise<Country> {
    const country = new Country();
    country.code = code;
    country.name = name;
    country.emoji = emoji;
    country.continent = continent;
    return await getConnection().getRepository(Country).save(country);
  }

  @Query(() => [Country])
  async countriesByContinent(@Arg('continent') continent: string): Promise<Country[]> {
    return await getConnection().getRepository(Country).find({ where: { continent } });
  }
}
