
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("paises")]
    [DisplayName("Paises"), InstanceName("Paises")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.Paises")]
    public sealed class PaisesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Pais Id"), Identity]
        public Int32? PaisId
        {
            get { return Fields.PaisId[this]; }
            set { Fields.PaisId[this] = value; }
        }

        [DisplayName("Pais"), Size(50), NotNull, QuickSearch]
        public String Pais
        {
            get { return Fields.Pais[this]; }
            set { Fields.Pais[this] = value; }
        }

        [DisplayName("Capital"), Size(50), NotNull]
        public String Capital
        {
            get { return Fields.Capital[this]; }
            set { Fields.Capital[this] = value; }
        }

        [DisplayName("Continente Id"), NotNull]
        public Int32? ContinenteId
        {
            get { return Fields.ContinenteId[this]; }
            set { Fields.ContinenteId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PaisId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Pais; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaisesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PaisId;
            public StringField Pais;
            public StringField Capital;
            public Int32Field ContinenteId;
        }
    }
}
