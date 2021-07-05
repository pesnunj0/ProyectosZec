
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("tipologias_capital")]
    [DisplayName("Tipologias Capital"), InstanceName("Tipologias Capital")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.TipologiasCapital")]
    public sealed class TipologiasCapitalRow : Row, IIdRow, INameRow
    {
        [DisplayName("Capital Id"), Column("Tipologia_CapitalId"), Identity]
        public Int32? CapitalId
        {
            get { return Fields.CapitalId[this]; }
            set { Fields.CapitalId[this] = value; }
        }

        [DisplayName("Capital"), Column("Tipologia_Capital"), Size(30), NotNull, QuickSearch]
        public String Capital
        {
            get { return Fields.Capital[this]; }
            set { Fields.Capital[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CapitalId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Capital; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TipologiasCapitalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CapitalId;
            public StringField Capital;
        }
    }
}
