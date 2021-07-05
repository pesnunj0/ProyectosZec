
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("continentes")]
    [DisplayName("Continentes"), InstanceName("Continentes")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.Continentes")]
    public sealed class ContinentesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Continente Id"), Identity]
        public Int32? ContinenteId
        {
            get { return Fields.ContinenteId[this]; }
            set { Fields.ContinenteId[this] = value; }
        }

        [DisplayName("Continente"), Size(30), NotNull, QuickSearch]
        public String Continente
        {
            get { return Fields.Continente[this]; }
            set { Fields.Continente[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ContinenteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Continente; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContinentesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ContinenteId;
            public StringField Continente;
        }
    }
}
