using FluentMigrator;

namespace ProyectosZec.Migrations.DefaultDB
{
    [Migration(20200819130000)]
    public class DefaultDB_20200819_130000_Inmovilizado : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Proveedores", "ProveedorId", s => s
            .WithColumn("Proveedor").AsString(45).NotNullable()
            .WithColumn("Telefono").AsString(20).Nullable()
            .WithColumn("Email").AsString(40).Nullable()
            .WithColumn("Contacto").AsString(40).Nullable());

            this.CreateTableWithId32("TiposInmovilizado", "TipoInmovilizadoId", s => s
                .WithColumn("Tipo").AsString(25).NotNullable());

            Insert.IntoTable("TiposInmovilizado").Row(new
            {
                Tipo = "Intangible"
            });
            Insert.IntoTable("TiposInmovilizado").Row(new
            {
                Tipo = "Material"
            });

            this.CreateTableWithId32("SubTiposInmovilizado", "SubTipoInmovilizadoId", s => s
                .WithColumn("TipoInmovilizadoId").AsInt32().NotNullable()
                .ForeignKey("FK_tipoId", "TiposInmovilizado", "TipoInmovilizadoId")
                .WithColumn("SubTipo").AsString(75).NotNullable());

            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "1",
                SubTipo = "Gastos de investigación"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "1",
                SubTipo = "Desarrollo"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "1",
                SubTipo = "Concesiones administrativas"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "1",
                SubTipo = "Propiedad industrial"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "1",
                SubTipo = "Fondo de comercio"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "1",
                SubTipo = "Derechos de traspaso"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "1",
                SubTipo = "Aplicaciones informáticas"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "1",
                SubTipo = "Anticipos para inmovilizaciones intangibles"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Terrenos y bienes naturales"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Construcciones"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Instalaciones técnicas"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Maquinaria"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Utillaje"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Otras instalaciones"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Mobiliario"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Equipos para procesos de información"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Elementos de transporte"
            });
            Insert.IntoTable("SubTiposInmovilizado").Row(new
            {
                TipoInmovilizadoId = "2",
                SubTipo = "Otro inmovilizado material"
            });

            this.CreateTableWithId32("Inmovilizados", "InmovilizadoId", s => s
                 .WithColumn("Descripcion").AsString(75).NotNullable()
                 .WithColumn("NumeroSerie").AsString(25)
                 .WithColumn("SubTipoInmovilizadoId").AsInt32().NotNullable()
                 .ForeignKey("FK_SubtipoId","SubTiposInmovilizado", "SubTipoInmovilizadoId")
                 .WithColumn("SedeId").AsInt32().NotNullable()
                 .ForeignKey("FK_SedeId", "Sedes", "SedeId")
                 .WithColumn("ProveedorId").AsInt32().NotNullable()
                 .ForeignKey("FK_ProveedorId", "Proveedores", "ProveedorId")
                 .WithColumn("FechaCompra").AsDate().NotNullable()
                 .WithColumn("FechaBaja").AsDate().Nullable()
                 .WithColumn("Valor").AsDecimal(10,2)
                 .WithColumn("Amortizacion").AsInt16().NotNullable()
                 .WithColumn("Garantia").AsInt16().Nullable()
                 .WithColumn("Factura").AsString(18).Nullable());
        }
    }
}