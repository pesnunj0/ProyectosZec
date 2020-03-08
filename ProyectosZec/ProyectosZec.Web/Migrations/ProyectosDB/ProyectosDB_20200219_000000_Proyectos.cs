using FluentMigrator;
using System;

namespace ProyectosZec.Migrations.ProyectosDB
{

    [Migration(20200219000000)]
    public class ProyectosDB_20200219_000000_Proyectos : Migration
    {
        public override void Up()
        {
            Alter.Table("Proyectos").InSchema("ProyectosZec")
                .AddColumn("EmpleoReal").AsInt32().Nullable()
                .AddColumn("Expediente").AsString(20).Nullable()
                .AddColumn("Nace").AsString(20).Nullable()
                .AddColumn("InversionReal").AsInt32().Nullable();
        }
        public override void Down()
        {
        }
    }
}