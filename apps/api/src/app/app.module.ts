import { Module } from "@nestjs/common";

import { AuthModule } from "./modules/auth/auth.module";
import { UserModule } from "./modules/user/user.module";
import { PacienteModule } from "./modules/paciente/paciente.module";
import DatabaseProviders from "../config/database/database.providers";
import { ConfigModule } from "@nestjs/config";
import { CategoriaModule } from './modules/categoria/categoria.module';
import { CepeModule } from './modules/cepe/cepe.module';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { ProfissionalModule } from './modules/profissional/profissional.module';
import { RacaModule } from './modules/raca/raca.module';
import { EstadoCivilModule } from './modules/estado_civil/estado_civil.module';
import { InstituicaoFinanceiraModule } from './modules/instituicao_financeira/instituicao_financeira.module';
import configuration from "../config"
import { EscolaridadeModule } from "./shared/escolaridade/escolaridade.module";
import { NaturalidadeModule } from "./shared/naturalidade/naturalidade.module";
import { PaisModule } from "./shared/pais/pais.module";
import { ReligiaoModule } from "./shared/religiao/religiao.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    AuthModule,
    DatabaseProviders,
    UserModule,
    PacienteModule,
    CategoriaModule,
    CepeModule,
    EmpresaModule,
    ProfissionalModule,
    ReligiaoModule,
    NaturalidadeModule,
    PaisModule,
    EscolaridadeModule,
    RacaModule,
    EstadoCivilModule,
    InstituicaoFinanceiraModule,
  ],
})
export class AppModule {}
