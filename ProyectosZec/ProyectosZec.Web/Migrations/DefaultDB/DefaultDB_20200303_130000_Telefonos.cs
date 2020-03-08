using FluentMigrator;

namespace ProyectosZec.Migrations.DefaultDB
{
    [Migration(20200303130000)]
    public class DefaultDB_20200303_130000_Telefonos : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Sedes", "SedeId", s => s
                .WithColumn("Sede").AsString(25).NotNullable());

            Insert.IntoTable("Sedes").Row(new
            {
                Sede = "Las Palmas GC"
            });

            Insert.IntoTable("Sedes").Row(new
            {
                Sede = "SC Tenerife"
            });

            this.CreateTableWithId32("Departamentos", "DepartamentoId", s => s
                .WithColumn("Departamento").AsString(25).NotNullable());


            Insert.IntoTable("Departamentos").Row(new
            {
                Departamento = "Presidencia"
            });

            Insert.IntoTable("Departamentos").Row(new
            {
                Departamento = "VicePresidencia"
            });

            Insert.IntoTable("Departamentos").Row(new
            {
                Departamento = "Dirección"
            });

            Insert.IntoTable("Departamentos").Row(new
            {
                Departamento = "Jurídico"
            });

            Insert.IntoTable("Departamentos").Row(new
            {
                Departamento = "Administración"
            });

            Insert.IntoTable("Departamentos").Row(new
            {
                Departamento = "Registro"
            });

            Insert.IntoTable("Departamentos").Row(new
            {
                Departamento = "Informática"
            });

            this.CreateTableWithId32("Telefonos", "TelefonoId", s => s
                 .WithColumn("SedeId").AsInt32().NotNullable()
                 .ForeignKey("FK_SedeId","Sedes","SedeId")
                 .WithColumn("DepartamentoId").AsInt32().NotNullable()
                 .ForeignKey("FK_DepartamentoId","Departamentos","DepartamentoId")
                 .WithColumn("Nombre").AsString(30).NotNullable()
                 .WithColumn("ExtCorta").AsString(5).NotNullable()
                 .WithColumn("Fijo").AsString(9).NotNullable()
                 .WithColumn("Movil").AsString(9).Nullable());
        }
    }
}