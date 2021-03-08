
namespace ProyectosZec.Kairos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Kairos"), Module("Kairos"), TableName("[dbo].[EstadosExtras]")]
    [DisplayName("Estados Extras"), InstanceName("Estados Extras")]
    [ReadPermission("Kairos:Read")]
    [ModifyPermission("Kairos:Modify")]
    [InsertPermission("Kairos:Insert")]
    [DeletePermission("Kairos:Delete")]
    [LookupScript("Kairos.EstadosExtras")]
    public sealed class EstadosExtrasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Estado Id"), Column("estadoId"), Size(1), PrimaryKey, QuickSearch]
        public String EstadoId
        {
            get { return Fields.EstadoId[this]; }
            set { Fields.EstadoId[this] = value; }
        }

        [DisplayName("Descripción"), Column("descripcion"), Size(20)]
        public String Descripcion   
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EstadoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descripcion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EstadosExtrasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField EstadoId;
            public StringField Descripcion;
        }
    }
}
