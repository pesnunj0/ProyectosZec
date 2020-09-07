using FluentMigrator;

namespace ProyectosZec.Migrations.DefaultDB
{
    [Migration(20200903130000)]
    public class DefaultDB_20200903_130000_Inmovilizado_cambios : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Inmovilizados").InSchema("Default")
            .AddColumn("Codigo").AsString(20).Nullable()
            .AddColumn("Ubicacion").AsString(20).Nullable()
            .AddColumn("Pg").AsString(12).Nullable()
            .AddColumn("Imagen").AsString(10000).Nullable();
        }
    }
}