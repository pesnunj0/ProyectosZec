/************************************************************************************************************
 * Creación tabla de Empresas Zec
 *
 * AUTOR : Javier Núñez
 * FECHA : ABRIL 2021
 * *********************************************************************************************************/



using FluentMigrator;
using System.IO;
using System;

namespace ProyectosZec.Migrations.RoezecDB
{
    [Migration(20210510140000)]
    public class RoezecDB_20210510_140000_Empresas : Migration
    {
        private string GetScript(string name)
        {
            using (var sr = new StreamReader(this.GetType().Assembly.GetManifestResourceStream(name)))
                return sr.ReadToEnd();
        }
        public override void Up()
        {
            /* Formas Juridicas */
            Create.Table("Formas_Juridicas").InSchema("Roezec")
                .WithColumn("Forma_JuridicaId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Forma_Juridica").AsString(50).NotNullable();

            /* Estados de una Empresa */

            Create.Table("Estados_Empresa").InSchema("Roezec")
                .WithColumn("EstadoEmpresaId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Estado").AsString(50);

            /* Tipos Garantía de Tasas */

            Create.Table("Tipos_Garantia_Tasas").InSchema("Roezec")
                .WithColumn("Tipo_Garantia_TasaId").AsInt32().Identity().PrimaryKey()
                .WithColumn("Tipo_Garantia_Tasa").AsString(30).NotNullable();

            /* Tipologias de Capital */
            Create.Table("Tipologias_Capital").InSchema("Roezec")
                .WithColumn("Tipologia_CapitalId").AsInt32().Identity().PrimaryKey()
                .WithColumn("Tipologia_Capital").AsString(30).NotNullable();

            /* Empresas */

            Create.Table("Empresas").InSchema("Roezec")
                .WithColumn("EmpresaId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Razon").AsString(45).NotNullable()
                .WithColumn("FormaJuridicaId").AsInt32().Nullable()
                .ForeignKey("Formas_Juridicas", "Forma_JuridicaId")
                .WithColumn("TecnicoId").AsInt32().Nullable()
                .ForeignKey("Tecnicos", "TecnicoId")
                .WithColumn("Cif").AsString(20).NotNullable()
                .WithColumn("Direccion").AsString(60).Nullable()
                .WithColumn("Poblacion").AsString(100).Nullable()
                .WithColumn("IslaId").AsInt32().Nullable()
                .ForeignKey("Islas", "IslaId")
                .WithColumn("Telefono_fijo").AsString(20)
                .WithColumn("Movil").AsString(20)
                .WithColumn("Email").AsString(75)
                .WithColumn("ProyectoId").AsInt32().Nullable()
                .ForeignKey("Proyectos", "ProyectoId")
                .WithColumn("Expediente").AsString(25).Nullable()
                .WithColumn("Motivo_Exencion").AsString(100).Nullable()
                .WithColumn("Tipologia_CapitalId").AsInt32().Nullable()
                .ForeignKey("FK_Empresas_Tipo_Capital", "Tipologias_Capital", "Tipologia_CapitalId")
                .WithColumn("Tipo_Garantia_TasaId").AsInt32().Nullable()
                .ForeignKey("FK_Empresas_Tipo_Garantia", "Tipos_Garantia_Tasas", "Tipo_Garantia_TasaId")
                .WithColumn("Empleo_Traspasado").AsInt32().Nullable()
                .WithColumn("Empleo_6_meses").AsInt32().Nullable()
                .WithColumn("Empleo_promedio").AsInt32().Nullable()
                .WithColumn("Empleo_promedio_2_anos").AsInt32().Nullable()
                .WithColumn("Inversion_traspasada").AsDecimal(10, 2).Nullable()
                .WithColumn("Inversion_2_anos").AsDecimal(10, 2).Nullable()
                .WithColumn("EstadoEmpresaId").AsInt32().Nullable()
                .ForeignKey("Estados_Empresa", "EstadoEmpresaId")
                //.WithColumn("Fecha_Alta_Registro").AsDate().Nullable()
                //.WithColumn("Fecha_Baja_Registro").AsDate().Nullable()
                //.WithColumn("Fecha_Baja_Efecto").AsDate().Nullable()
                //.WithColumn("Fecha_Remision_CT").AsDate().Nullable()
                //.WithColumn("Fecha_Informe_CT").AsDate().Nullable()
                //.WithColumn("Fecha_Remision_CR").AsDate().Nullable()
                //.WithColumn("Fecha_Caducidad_Inscripcion").AsDate().Nullable()
                //.WithColumn("Fecha_Resolucion_Apercibimiento").AsDate().Nullable()
                //.WithColumn("Acuse_Resolucion_Apercibimiento").AsDate().Nullable()
                //.WithColumn("Fecha_Resolucion_Caducidad").AsDate().Nullable()
                //.WithColumn("Acuse_Resolucion_Caducidad").AsDate().Nullable()
                //.WithColumn("Fecha_Resolucion_Denegacion").AsDate().Nullable()
                //.WithColumn("Observaciones_Denegacion").AsString(200).Nullable()
                //.WithColumn("Acuse_Resolucion_Denegacion").AsDate().Nullable()
                //.WithColumn("Fecha_Resolucion_Inicio_Sancion").AsDate().Nullable()
                //.WithColumn("Acuse_Resolucion_Inicio_Sancion").AsDate().Nullable()
                //.WithColumn("Fecha_Resolucion_Sancion").AsDate().Nullable()
                //.WithColumn("Acuse_Resolucion_Sancion").AsDate().Nullable()
                //.WithColumn("Fecha_Resolucion_Archivo_Sancion").AsDate().Nullable()
                //.WithColumn("Acuse_Resolucion_Archivo_Sancion").AsDate().Nullable()
                //.WithColumn("Fecha_Resolucion_Suspension_Temporal").AsDate().Nullable()
                //.WithColumn("Acuse_Resolucion_Suspension_Temporal").AsDate().Nullable()
                //.WithColumn("Prorroga").AsDate().Nullable()
                //.WithColumn("Acuse_Prorroga").AsDate().Nullable()
                //.WithColumn("Fecha_Verificacion_Empleo").AsDate().Nullable()
                //.WithColumn("Observaciones_Empleo").AsString(200).Nullable()
                //.WithColumn("Fecha_Verificacion_Inversion").AsDate().Nullable()
                //.WithColumn("Observaciones_Inversion").AsString(200).Nullable()
                //.WithColumn("Sentido_CR").AsBoolean().WithDefaultValue(0)
                //.WithColumn("Sentido_CT").AsBoolean().WithDefaultValue(0)
                //.WithColumn("Fecha_Ins_Solicitud").AsDate().Nullable()
                //.WithColumn("Fecha_Ins_Resolucion").AsDate().Nullable()
                //.WithColumn("Fecha_Ins_Notificacion").AsDate().Nullable()
                .WithColumn("Num_Tasa_Liquidacion").AsString(20).Nullable();
                //.WithColumn("Ficheros_Autorizacion_previa").AsString(3000).Nullable()
                //.WithColumn("Ficheros_Solicitud_Inscripcion").AsString(3000).Nullable()
                //.WithColumn("Ficheros_Procedimiento_Sancionador").AsString(3000).Nullable()
                //.WithColumn("Ficheros_Tasas").AsString(3000).Nullable()
                //.WithColumn("Ficheros_Baja").AsString(3000).Nullable()

            Create.Table("Tipos_Contacto").InSchema("Roezec")
                .WithColumn("Tipo_ContactoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Tipo_Contacto").AsString(30).NotNullable();

            Create.Table("Empresas_Contactos").InSchema("Roezec")
                .WithColumn("Empresa_ContactoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("EmpresaId").AsInt32().NotNullable()
                .ForeignKey("Empresas", "EmpresaId")
                .WithColumn("ContactoId").AsInt32().NotNullable()
                .ForeignKey("FK_Empresas_Contactos_ContactoId","Contactos","ContactoId")
                .WithColumn("Tipo_ContactoId").AsInt32().NotNullable()
                .ForeignKey("FK_Empresas_TiposContactoId", "Tipos_Contacto", "Tipo_ContactoId")
                .WithColumn("Fecha_Baja").AsDate().Nullable();

            Create.Table("Procedencia_Capital").InSchema("Roezec")
                .WithColumn("ProcedenciaId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmpresaId").AsInt32().NotNullable()
                .ForeignKey("Empresas", "EmpresaId")
                .WithColumn("PaisId").AsInt32().NotNullable()
                .ForeignKey("Paises", "PaisId")
                .WithColumn("Porcentaje").AsDecimal(3, 1).NotNullable();

            Create.Table("Empresas_Nace").InSchema("Roezec")
                .WithColumn("EmpresaNaceId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmpresaId").AsInt32()
                .ForeignKey("Empresas", "EmpresaId")
                .WithColumn("NaceId").AsInt32()
                .ForeignKey("Naces", "NaceId");

            Create.Table("Procedimientos").InSchema("Roezec")
                .WithColumn("ProcedimientoId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Procedimiento").AsString(100).NotNullable();

            Create.Table("Historial_Empresas").InSchema("Roezec")
                .WithColumn("HistorialId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("EmpresaId").AsInt32()
                .ForeignKey("FK_HistEmpresas_EmpresaId","Empresas", "EmpresaId")
                .WithColumn("ProcedimientoId").AsInt32().NotNullable()
                .ForeignKey("FK_HistEmpresas_ProcedimientoId", "Procedimientos", "ProcedimientoId")
                .WithColumn("Fecha_Inicio").AsDate().NotNullable()
                .WithColumn("Fecha_Resolucion").AsDate().Nullable()
                .WithColumn("Sentido_Resolucion").AsBoolean().Nullable()
                .WithColumn("Acuse_Inicio").AsDate().Nullable()
                .WithColumn("Persona_Acuse_Incio").AsInt32().Nullable()
                .WithColumn("Acuse_Resolucion").AsDate().Nullable()
                .WithColumn("Fecha_Efecto").AsDate().Nullable()
                .WithColumn("Persona_Acuse_Resolucion").AsInt32().Nullable()              
                .WithColumn("Observaciones").AsString(200).Nullable()
                .WithColumn("Ficheros").AsString(1000).Nullable();


            /* *******************************************
             * Registros por defecto                    */
            /********************************************/

            /* Tipos_Garantia_Tasas */

            Insert.IntoTable("Tipos_Garantia_Tasas")
                    .Row(new
                    {
                        Tipo_Garantia_Tasa = "Depósito"
                    });


            Insert.IntoTable("Tipos_Garantia_Tasas")
                    .Row(new
                    {
                        Tipo_Garantia_Tasa = "Otros"
                    });

            /* Formas Jurídicas */

            Insert.IntoTable("Formas_Juridicas")
                    .Row(new
                    {
                        Forma_Juridica = "Sociedad Anónima"
                    });


            Insert.IntoTable("Formas_Juridicas")
                    .Row(new
                    {
                        Forma_Juridica = "Sociedad Limitada"
                    });


            Insert.IntoTable("Formas_Juridicas")
                    .Row(new
                    {
                        Forma_Juridica = "Sociedad Comanditaria"
                    });

            Insert.IntoTable("Formas_Juridicas")
                    .Row(new
                    {
                        Forma_Juridica = "Sociedad Colectiva"
                    });


            /* Tipos de contacto */

            Insert.IntoTable("Tipos_Contacto")
                    .Row(new
                    {
                        Tipo_Contacto = "Socio"
                    });


            Insert.IntoTable("Tipos_Contacto")
                    .Row(new
                    {
                        Tipo_Contacto = "Representante"
                    });

            Insert.IntoTable("Tipos_Contacto")
                    .Row(new
                    {
                        Tipo_Contacto = "Resp. Autorización Previa"
                    });


            Insert.IntoTable("Tipos_Contacto")
                    .Row(new
                    {
                        Tipo_Contacto = "Resp. Notificaciones"
                    });

            /* Procedimientos */

            Insert.IntoTable("Procedimientos")
                    .Row(new
                    {
                        Procedimiento = "Autorizacion Previa"
                    });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Solicitud de Inscripción"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Apercibimiento"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Renuncia a la Autorizacion"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Denegación"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Acuerdo Sancionador"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Archivo Actuaciones Sancionador"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Sanción"
                });


            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Suspensión Temporal"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Subsanación de defectos"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Prórroga"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Baja"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Tasas"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Verificación Empleo"
                });

            Insert.IntoTable("Procedimientos")
                .Row(new
                {
                    Procedimiento = "Verificación Capital"
                });

        }

        public override void Down()
        {
        }
    }
}