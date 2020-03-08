using FluentMigrator;
using System;

namespace ProyectosZec.Migrations.ProyectosDB
{

    [Migration(20200101000000)]
    public class ProyectosDB_20200101_000000_Initial : Migration
    {
        public override void Up()
        {
            IfDatabase("MySql")
                .Execute.EmbeddedScript("ProyectosZec.Migrations.ProyectosDB.DropDatabaseProyectosDBScript_MySql.sql");
            Create.Schema("ProyectosZec");

            /* Tabla Tecnicos. Ver que Unique debe crear el indice */

            Create.Table("Tecnicos").InSchema("ProyectosZec")
                .WithColumn("TecnicoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("NombreTecnico").AsString(30).NotNullable()
                .WithColumn("Tecnico").AsString(4).NotNullable().Unique();

            Insert.IntoTable("Tecnicos").Row(new
            {
                Tecnico = "CRM",
                NombreTecnico = "Carmen Reguero Marrero"
            });

            Insert.IntoTable("Tecnicos").Row(new
            {
                Tecnico = "DDM",
                NombreTecnico = "Delia Domínguez Montenegro"
            });

            Insert.IntoTable("Tecnicos").Row(new
            {
                Tecnico = "MDL",
                NombreTecnico = "'Monica Doreste Leander'"
            });

            Insert.IntoTable("Tecnicos").Row(new
            {
                Tecnico = "ESM",
                NombreTecnico = "Eva Sainero Martín"
            });

            Insert.IntoTable("Tecnicos").Row(new
            {
                Tecnico = "ISH",
                NombreTecnico = "Isabel Castro Hernández"
            });

            Insert.IntoTable("Tecnicos").Row(new
            {
                Tecnico = "SJJ",
                NombreTecnico = "Sabita Jagtani Jagtani"
            });

            Insert.IntoTable("Tecnicos").Row(new
            {
                Tecnico = "OTRO",
                NombreTecnico = "Otro"
            });

             /* Tabla Islas */

            Create.Table("Islas").InSchema("ProyectosZec")
            .WithColumn("IslaId").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("NombreIsla").AsString(20).NotNullable()
            .WithColumn("Isla").AsString(3).NotNullable();

            Create.Index("IslaId").OnTable("Islas").OnColumn("IslaId").Unique();

            Insert.IntoTable("Islas").Row(new
            {
                Isla = "GC",
                NombreIsla = "GRAN CANARIA"
            });

            Insert.IntoTable("Islas").Row(new
            {
                Isla = "TF",
                NombreIsla = "TENERIFE"
            });

            Insert.IntoTable("Islas").Row(new
            {
                Isla = "FTV",
                NombreIsla = "FUERTEVENTURA"
            });

            Insert.IntoTable("Islas").Row(new
            {
                Isla = "LZ",
                NombreIsla = "LANZAROTE"
            });

            Insert.IntoTable("Islas").Row(new
            {
                Isla = "LP",
                NombreIsla = "LA PALMA"
            });

            Insert.IntoTable("Islas").Row(new
            {
                Isla = "GM",
                NombreIsla = "LA GOMERA"
            });

            Insert.IntoTable("Islas").Row(new
            {
                Isla = "EH",
                NombreIsla = "EL HIERRO"
            });

            /* Tabla PrescriptorInversor */

            Create.Table("PrescriptorInversor").InSchema("ProyectosZec")
                .WithColumn("PrescriptorInversorId").AsInt32().Identity().PrimaryKey().NotNullable() 
                .WithColumn("PrescriptorInversor").AsString(20).NotNullable();

            Insert.IntoTable("PrescriptorInversor").Row(new
            {
                PrescriptorInversor = "PRESCRIPTOR"
            });

            Insert.IntoTable("PrescriptorInversor").Row(new
            {
                PrescriptorInversor = "INVESOR"
            });

            /* Tabla Estados */

            Create.Table("Estados").InSchema("ProyectosZec")
                .WithColumn("EstadoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Estado").AsString(20).NotNullable();

            Insert.IntoTable("Estados").Row(new
            {
                Estado = "EN PROGRESO"
            });

            Insert.IntoTable("Estados").Row(new
            {
                Estado = "DESISTE"
            });

            Insert.IntoTable("Estados").Row(new
            {
                Estado = "MEMORIA"
            });

            Insert.IntoTable("Estados").Row(new
            {
                Estado = "ACTIVA"
            });

            Insert.IntoTable("Estados").Row(new
            {
                Estado = "SUSPENSION"
            });

            Insert.IntoTable("Estados").Row(new
            {
                Estado = "BAJA"
            });
            /* Tabla Capital */

            Create.Table("Capital").InSchema("ProyectosZec")
                .WithColumn("CapitalId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Capital").AsString(20).NotNullable();

            Insert.IntoTable("Capital").Row(new
            {
                Capital = "EXTERIOR"
            });

            Insert.IntoTable("Capital").Row(new
            {
                Capital = "MIXTO"
            });

            Insert.IntoTable("Capital").Row(new
            {
                Capital = "LOCAL"
            });

            /* Tabla Sectores */

            Create.Table("Sectores").InSchema("ProyectosZec")
                .WithColumn("SectorId").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("Sector").AsString(50).NotNullable();

            Insert.IntoTable("Sectores").Row(new
            {
                Sector = "COMERCIO"
            });

            Insert.IntoTable("Sectores").Row(new
            {
                Sector = "SERVICIOS"
            });

            Insert.IntoTable("Sectores").Row(new
            {
                Sector = "INDUSTRIA"
            });

            /* Tabla Subsectores */
            Create.Table("Subsectores").InSchema("ProyectosZec")
                .WithColumn("SubsectorId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("SectorId").AsInt32().NotNullable()
                .ForeignKey("FK_Setores_sectorId", "Sectores", "SectorId")
                .WithColumn("Subsector").AsString(50).NotNullable();

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 1,
                Subsector = "B2B / INTERMEDIARIOS DEL COMERCIO"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 1,
                Subsector = "DISTRIBUCIÓN MAYORISTA"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 1,
                Subsector = "OTROS COMERCIO"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 1,
                Subsector = "TRADING"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 1,
                Subsector = "CENTRALES DE COMPRA"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "ACTIVIDADES ANEXAS A LA CONSTRUCCIÓN"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "ACTIVIDADES ANEXAS AL TURISMO"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "ACTIVIDADES INFORMÁTICAS"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "ARQUITECTURA E INGENIERÍA"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "CALL CENTERS"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "CENTROS DE SERVICIO Y CONSULTORÍA"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "I+D+I"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "OTROS SERVICIOS"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "SECTOR AUDIOVISUAL"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "TELECOMUNICACIONES"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "TRANSPORTE AÉREO Y ACTIVIDADES ANEXAS"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 2,
                Subsector = "TRANSPORTE MARÍTIMO Y ACTIVIDADES ANEXAS"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 3,
                Subsector = "ACUICULTURA"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 3,
                Subsector = "BIOTECNOLOGÍA"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 3,
                Subsector = "ENERGÍAS RENOVABLES"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 3,
                Subsector = "INDUSTRIA AGROALIMENTARIA"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 3,
                Subsector = "ACUICULTURA"
            });

             Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 3,
                Subsector = "INDUSTRIA PARA LA CONSTRUCCIÓN"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 3,
                Subsector = "INDUSTRIA QUÍMICA"
            });

            Insert.IntoTable("Subsectores").Row(new
            {
                SectorId = 3,
                Subsector = "OTRAS MANUFACTURAS"
            });

            /* Finalmente, la Tabla Proyectos que tendrá la Foreign Keys */

            Create.Table("Proyectos").InSchema("ProyectosZec")
                .WithColumn("ProyectoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Denominacion").AsString(45).NotNullable()
                .WithColumn("TecnicoId").AsInt32().NotNullable()
                .ForeignKey("FK_Tecnicos_TecnicoId", "Tecnicos", "TecnicoId")
                .WithColumn("SubsectorId").AsInt32().NotNullable()
                .ForeignKey("FK_SubsectorId", "Subsectores", "SubsectorId")
                .WithColumn("IslaId").AsInt32().NotNullable()
                .ForeignKey("FK_Islas_IslaId", "Islas", "IslaId")
                .WithColumn("CapitalId").AsInt32().NotNullable()
                .ForeignKey("FK_CapitalId", "Capital", "CapitalId")
                .WithColumn("Captacion").AsString(45).Nullable()
                .WithColumn("PrescriptorInversorId").AsInt32().NotNullable()
                .ForeignKey("FK_InvDesc_Id", "PrescriptorInversor", "PrescriptorInversorId")
                .WithColumn("Descripcion").AsString(1000).Nullable()
                .WithColumn("Contacto").AsString(50).Nullable()
                .WithColumn("Telefono").AsString(20).Nullable()
                .WithColumn("Email").AsString(100).Nullable()
                .WithColumn("EstadoId").AsInt32().NotNullable()
                .ForeignKey("FK_EstadoId", "Estados", "EstadoId")
                .WithColumn("FechaInicio").AsDate().NotNullable()
                .WithColumn("FechaPresentacion").AsDate().Nullable()
                .WithColumn("FechaInscripcion").AsDate().Nullable()
                .WithColumn("FechaAutorizacion").AsDate().Nullable()
                .WithColumn("FechaAmpliacion").AsDate().Nullable()
                .WithColumn("FechaBaja").AsDate().Nullable()
                .WithColumn("Empleos").AsInt32().Nullable()
                .WithColumn("Inversion").AsInt32().Nullable();
        }
        public override void Down()
        {
        }
    }
}