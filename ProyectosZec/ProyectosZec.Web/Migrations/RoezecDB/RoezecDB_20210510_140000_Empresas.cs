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
    public class RoezecDB_20215410_140000_Initial : Migration
    {
        private string GetScript(string name)
        {
            using (var sr = new StreamReader(this.GetType().Assembly.GetManifestResourceStream(name)))
                return sr.ReadToEnd();
        }
        public override void Up()
        {

            /* Estados de una Empresa */

            Create.Table("Estados_Empresa").InSchema("Roezec")
                .WithColumn("EstadoEmpresaId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Estado").AsString(50);

            /* Empresas */
            
            Create.Table("Empresas").InSchema("Roezec")
                .WithColumn("EmpresaId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Razon").AsString(45).NotNullable()
                .WithColumn("N_Expediente").AsString(25).Nullable()
                .WithColumn("TecnicoId").AsInt32().Nullable()
                .ForeignKey("Tecnicos","TecnicoId")
                .WithColumn("Cif").AsString(20).NotNullable()
                .WithColumn("Direccion").AsString(60).Nullable()
                .WithColumn("Polblacion").AsString(100).Nullable()
                .WithColumn("IslaId").AsInt32().Nullable()
                .ForeignKey("Islas","IslaId")
                .WithColumn("Telefono_fijo").AsString(20)
                .WithColumn("Movil").AsString(20)
                .WithColumn("Email").AsString(75)
                .WithColumn("ProyectoId").AsInt32().Nullable()
                .ForeignKey("Proyectos","ProyectoId")
                .WithColumn("Expediente").AsString(25).Nullable()
                .WithColumn("Motivo_Exencion").AsString(100).Nullable()
                .WithColumn("Empleo_Traspasado").AsInt32().Nullable()
                .WithColumn("Empleo_6_meses").AsInt32().Nullable()
                .WithColumn("Empleo_promedio").AsInt32().Nullable()
                .WithColumn("Inversion_traspasada").AsDecimal(10,2).Nullable()
                .WithColumn("Inversion_2_anos").AsDecimal(10,2).Nullable()
                .WithColumn("EstadoEmpresaId").AsInt32().Nullable()
                .ForeignKey("Estados_Empresa", "EstadoEmpresaId")
                .WithColumn("Fecha_Alta_Registro").AsDate().Nullable()
                .WithColumn("Fecha_Baja_Registro").AsDate().Nullable()
                .WithColumn("Fecha_Baja_Efecto").AsDate().Nullable()
                .WithColumn("Fecha_Remision_CT").AsDate().Nullable()
                .WithColumn("Fecha_Informe_CT").AsDate().Nullable()
                .WithColumn("Fecha_Remision_CR").AsDate().Nullable()
                .WithColumn("Sentido_CR").AsBoolean().WithDefaultValue(0)
                .WithColumn("Sentido_CT").AsBoolean().WithDefaultValue(0)
                .WithColumn("Fecha_Ins_Solicitud").AsDate().Nullable()
                .WithColumn("Fecha_Ins_Resolucion").AsDate().Nullable()
                .WithColumn("Fecha_Ins_Notificacion").AsDate().Nullable()
                .WithColumn("Num_Tasa_Liquidacion").AsString(20).Nullable()
                .WithColumn("Ficheros_Autorizacion_previa").AsString(3000).Nullable()
                .WithColumn("Ficheros_Solicitud_Inscripcion").AsString(3000).Nullable()
                .WithColumn("Ficheros_Procedimiento_Sancionador").AsString(3000).Nullable()
                .WithColumn("Ficheros_Tasas").AsString(3000).Nullable()
                .WithColumn("Ficheros_Baja").AsString(3000).Nullable()
                
                ;

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
                .ForeignKey("Empresas","EmpresaId")
                .WithColumn("NaceId").AsInt32()
                .ForeignKey("Naces", "NaceId");

        }
        public override void Down()
        {
        }
    }
}