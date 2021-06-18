/************************************************************************************************************
 * Creación Incial de las tablas auxiliares y la tabla de Proyectos y CRM
 *
 * Tablas:
 *      - Contactos
 *      - Continentes
 *      - Paises
 *      - tipos de acciones promocionales
 *      - acciones promocionales
 *      - Tecnicos
 *      - Islas
 *      - PrescriptorInversor
 *      - Sectores
 *      - Subsectores
 *      - Naces
 *      - Origenes_Proyecto
 *      - Capital
 *      - Proyectos
 *      - Proyectos_Historial
 *      - Proyectos_Contacto
 *      
 * 
 * AUTOR : Javier Núñez
 * FECHA : ABRIL 2021
 * *********************************************************************************************************/



using FluentMigrator;
using System.IO;
using System;

namespace ProyectosZec.Migrations.RoezecDB
{
    [Migration(20210426140000)]
    public class RoezecDB_20210426_140000_Initial : Migration
    {

        private string GetScript(string name)
        {
            using (var sr = new StreamReader(this.GetType().Assembly.GetManifestResourceStream(name)))
                return sr.ReadToEnd();
        }
        public override void Up()
        {

            //IfDatabase("MySql")
            //    //Si es Mysql hay que hacer un drop de la BD porque si no, da un errorjavascript 
            //    .Execute.Sql(GetScript("Nuevo_Roezec.Web.Migrations.RoezecDB.DropDatabaseRoezecDBScript_MySql.sql"));
            

            // Asegurarse que la base de datos no existe y hacer un drop antes
            Create.Schema("Roezec");

            /* Idiomas */
            Create.Table("Idiomas").InSchema("Roezec")
                .WithColumn("IdiomaId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Idioma").AsString(5)
                .WithColumn("NombreIdioma").AsString(30);
            /* Contactos */            

            Create.Table("Contactos").InSchema("Roezec")
                .WithColumn("ContactoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Nombre").AsString(45).NotNullable()
                .WithColumn("Apellidos").AsString(45).NotNullable()
                .WithColumn("Telefono_fijo").AsString(20).Nullable()
                .WithColumn("Movil").AsString(20).Nullable()
                .WithColumn("IdiomaId").AsInt32().Nullable()
                .ForeignKey("Idiomas","IdiomaId")
                .WithColumn("Email").AsString(75).Nullable();

            /* Tabla Continentes */
            Create.Table("Continentes").InSchema("Roezec")
                .WithColumn("ContinenteId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Continente").AsString(30).NotNullable();

            /* Tabla Paises */

            Create.Table("Paises").InSchema("Roezec")
                .WithColumn("PaisId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Pais").AsString(50)
                .WithColumn("Capital").AsString(50)
                .WithColumn("ContinenteId").AsInt32().NotNullable()
                .ForeignKey("Continentes", "ContinenteId");

            /* tipos de acciones promocionales */

            Create.Table("Tipos_acciones_promocionales").InSchema("Roezec")
                .WithColumn("TipoAccionId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("TipoAccion").AsString(30).NotNullable();

            /* Acciones promocionales */

            Create.Table("Acciones_promocionales").InSchema("Roezec")
                .WithColumn("AccionId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Nombre").AsString(50).NotNullable()
                .WithColumn("Fecha").AsDate().NotNullable()
                .WithColumn("Descripcion").AsString(250)
                .WithColumn("TipoAccionId").AsInt32().NotNullable()
                .ForeignKey("FK_tipoAccionId","Tipos_acciones_promocionales", "TipoAccionId")
                .WithColumn("PaisId").AsInt32()
                .ForeignKey("Paises", "PaisId")
                .WithColumn("Coste").AsDecimal(9,2);

            /* Tabla Tecnicos. */

            Create.Table("Tecnicos").InSchema("Roezec")
                .WithColumn("TecnicoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("NombreTecnico").AsString(30).NotNullable()
                .WithColumn("Tecnico").AsString(4).NotNullable().Unique();

            /* Tabla Islas */

            Create.Table("Islas").InSchema("Roezec")
            .WithColumn("IslaId").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("NombreIsla").AsString(20).NotNullable()
            .WithColumn("Isla").AsString(3).NotNullable();


            /* Tabla PrescriptorInversor */

            Create.Table("PrescriptorInversor").InSchema("Roezec")
                .WithColumn("PrescriptorInversorId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("PrescriptorInversor").AsString(20).NotNullable();


            /* Tabla Eventos de Calendario 
                Basado el Calendario https://www.cssscript.com/demo/feature-rich-event-calendar/
            La definición de los eventos está en:
            https://github.com/williamtroup/Calendar.js/blob/main/EVENT.md */

            Create.Table("Eventos").InSchema("Roezec")
                .WithColumn("EventId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Title").AsString(100).NotNullable() /* Titulo */
                .WithColumn("From").AsDateTime().NotNullable() /* Desde */
                .WithColumn("To").AsDateTime().NotNullable()   /* Hasta */
                .WithColumn("IsAllDay").AsBoolean().Nullable() /* True si es todo el dia de 00:00 a 23:59 */
                .WithColumn("Location").AsString(255).Nullable() /* Lugar */
                .WithColumn("Description").AsString(255).Nullable() /* The in-depth description of the event. */
                .WithColumn("Color").AsString(50).Nullable()  /* The color that should be used for the event (overrides all others). */
                .WithColumn("ColorText").AsString(50).Nullable() /* The color that should be used for the event text (overrides all others). */
                .WithColumn("ColorBorder").AsString(50).Nullable() /* The color that should be used for the event border (overrides all others). */
                .WithColumn("RepeatEery").AsInt32().WithDefaultValue(0) /* States how often the event should repeat (0 = Never, 1 = Every Day, 2 = Every Week, 3 = Every Month, 4 = Every Year). */
                .WithColumn("TecnicoId").AsInt32().Nullable()               
                .ForeignKey("Tecnicos","TecnicoId")
                .WithColumn("OrganizerName").AsString(70).Nullable()
                .WithColumn("Created").AsDateTime().Nullable()
                .WithColumn("ContactoId").AsInt32().Nullable()
                .ForeignKey("Contactos","ContactoId"); 

            /* Tabla Sectores */

            Create.Table("Sectores").InSchema("Roezec")
                .WithColumn("SectorId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Sector").AsString(50).NotNullable();

            /* Tabla Subsectores */
            Create.Table("Subsectores").InSchema("Roezec")
                .WithColumn("SubsectorId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("SectorId").AsInt32().NotNullable()
                .ForeignKey("Sectores", "SectorId")
                .WithColumn("Subsector").AsString(50).NotNullable();

            /* Tabla Capital */

            Create.Table("Capital").InSchema("Roezec")
                .WithColumn("CapitalId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Capital").AsString(20).NotNullable();

            /* Tabla de Naces o Actividades */

            Create.Table("Naces").InSchema("Roezec")
                .WithColumn("NaceId").AsInt32().NotNullable().Identity().PrimaryKey()
                .WithColumn("Nace").AsString(30).NotNullable()
                .WithColumn("Codigo").AsString(5).Nullable()
                .WithColumn("Descripcion").AsString(150).NotNullable()
                .WithColumn("SubsectorId").AsInt32().Nullable()
                .ForeignKey("Subsectores", "SubsectorId");

            Create.Index("CodigoNace").OnTable("Naces").OnColumn("Codigo");

            /* Tabla Origen */

            Create.Table("Origenes_Proyecto").InSchema("Roezec")
                .WithColumn("OrigenId").AsInt32().Identity().PrimaryKey()
                .WithColumn("Origen").AsString(50).NotNullable();

            /* Estados de un Proyecto */

            Create.Table("Estados_Proyecto").InSchema("Roezec")
                .WithColumn("EstadoProyectoId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Estado").AsString(50);

            /* Tabla Proyectos */

            Create.Table("Proyectos").InSchema("Roezec")
                .WithColumn("ProyectoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Proyecto").AsString(100).NotNullable()
                .WithColumn("Descripcion").AsString(300).Nullable()
                .WithColumn("FechaPrimerContacto").AsDate().NotNullable()
                .WithColumn("OrigenId").AsInt32().NotNullable()
                    .ForeignKey("Origenes_Proyecto", "OrigenId")
                .WithColumn("EstadoProyectoId").AsInt32().NotNullable()
                    .ForeignKey("Estados_Proyecto", "EstadoProyectoId")
                .WithColumn("TecnicoId").AsInt32().NotNullable()
                    .ForeignKey("Tecnicos", "TecnicoId")
                .WithColumn("Confidencial").AsBoolean()
                .WithColumn("ContactoPrincipalId").AsInt32()
                    .ForeignKey("Contactos", "ContactoId")
                .WithColumn("PrescriptorId").AsInt32()
                    .ForeignKey("Contactos", "ContactoId")
                .WithColumn("AccionId").AsInt32()
                    .ForeignKey("Acciones_promocionales", "AccionId")
                .WithColumn("Inversion").AsInt32().Nullable()
                .WithColumn("UserId").AsInt32()
                .WithColumn("fechaModificacion").AsDateTime();

            /* Historial de un Proyecto */

            Create.Table("Proyectos_Historial").InSchema("Roezec")
                .WithColumn("ProyectosHistorialId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("ProyectoId").AsInt32().NotNullable()
                .ForeignKey("Proyectos", "ProyectoId")
                .WithColumn("Fecha").AsDate().NotNullable()
                .WithColumn("Desc_Corta").AsString(50)
                .WithColumn("Descripcion").AsString(500);

            /* Tabla ProyectosNace */

            Create.Table("Proyectos_Nace").InSchema("Roezec")
                .WithColumn("ProyectoNaceId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("ProyectoId").AsInt32().NotNullable()
                    .ForeignKey("Proyectos", "ProyectoId")
                .WithColumn("NaceId").AsInt32().NotNullable()
                    .ForeignKey( "Naces", "NaceId");

               Create.Index("ProyectosNace").OnTable("Proyectos_Nace").OnColumn("ProyectoNaceId").Ascending().OnColumn("NaceId").Ascending();

            /* ProyectosContacto */

            Create.Table("Proyectos_Contacto").InSchema("Roezec")
                .WithColumn("ProyectoContactoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("ProyectoId").AsInt32().NotNullable()
                    .ForeignKey("Proyectos", "ProyectoId")
                .WithColumn("ContactoId").AsInt32().NotNullable()
                .ForeignKey("Contactos", "ContactoId")
                .WithColumn("FechaAlta").AsDate().NotNullable()
                .WithColumn("FechaBaja").AsDate().Nullable();

            /* Proyectos Evento */

            Create.Table("Proyectos_Eventos").InSchema("Roezec")
                .WithColumn("ProyectoEventoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("ProyectoId").AsInt32().NotNullable()
                    .ForeignKey("Proyectos", "ProyectoId")
                .WithColumn("EventoId").AsInt32().NotNullable()
                    .ForeignKey("Eventos", "EventId");

            /**** Insertamos los registros de las tablas comunes ***/

            Insert.IntoTable("Idiomas").Row(new
            {
                Idioma = "es",
                NombreIdioma = "Español"
            });

            Insert.IntoTable("Idiomas").Row(new
            {
                Idioma = "en",
                NombreIdioma = "Inglés"
            });

            Insert.IntoTable("Idiomas").Row(new
            {
                Idioma = "de",
                NombreIdioma = "Alemán"
            });

            Insert.IntoTable("Idiomas").Row(new
            {
                Idioma = "it",
                NombreIdioma = "Italiano"
            });

            Insert.IntoTable("Idiomas").Row(new
            {
                Idioma = "fr",
                NombreIdioma = "Frances"
            });

            Insert.IntoTable("Idiomas").Row(new
            {
                Idioma = "pt",
                NombreIdioma = "Portugués"
            });

            Insert.IntoTable("Idiomas").Row(new
            {
                Idioma = "ru",
                NombreIdioma = "Ruso"
            });

            Insert.IntoTable("Idiomas").Row(new
            {
                Idioma = "zh",
                NombreIdioma = "Chino"
            });

            Insert.IntoTable("Estados_Proyecto").Row(new
            {
                Estado = "Identificado"
            });

            Insert.IntoTable("Estados_Proyecto").Row(new
            {
                Estado = "Contactado"
            });

            Insert.IntoTable("Estados_Proyecto").Row(new
            {
                Estado = "Interés"
            });

            Insert.IntoTable("Estados_Proyecto").Row(new
            {
                Estado = "Análisis de encaje ZEC"
            });

            Insert.IntoTable("Estados_Proyecto").Row(new
            {
                Estado = "Preparación"
            });

            Insert.IntoTable("Estados_Proyecto").Row(new
            {
                Estado = "Decae"
            });

            Insert.IntoTable("Estados_Proyecto").Row(new
            {
                Estado = "Autorizada"
            });

            Insert.IntoTable("Continentes").Row(new
            {
                Continente = "Europa"
            });

            Insert.IntoTable("Continentes").Row(new
            {
                Continente = "América"
            });

            Insert.IntoTable("Continentes").Row(new
            {
                Continente = "Asia"
            });

            Insert.IntoTable("Continentes").Row(new
            {
                Continente = "Oceanía"
            });

            Insert.IntoTable("Continentes").Row(new
            {
                Continente = "Africa"
            });

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

            Insert.IntoTable("PrescriptorInversor").Row(new
            {
                PrescriptorInversor = "PRESCRIPTOR"
            });

            Insert.IntoTable("PrescriptorInversor").Row(new
            {
                PrescriptorInversor = "INVESOR"
            });

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

            IfDatabase("MySql")
                //Carga de datos de paises
                .Execute.EmbeddedScript("ProyectosZec.Migrations.RoezecDB.RoezecDB_paises_DataScript_Mysql");

            IfDatabase("MySql")
                 //Carga de datos de Naces 
                 .Execute.EmbeddedScript("ProyectosZec.Migrations.RoezecDB.RoezecDB_Nace_dataScript_Mysql.sql");
            
        }
        public override void Down()
        {
        }
    }
}