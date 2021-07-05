
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("formas_juridicas")]
    [DisplayName("Formas Juridicas"), InstanceName("Formas Juridicas")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.FormasJuridicas")]
    public sealed class FormasJuridicasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Juridica Id"), Column("Forma_JuridicaId"), Identity]
        public Int32? JuridicaId
        {
            get { return Fields.JuridicaId[this]; }
            set { Fields.JuridicaId[this] = value; }
        }

        [DisplayName("Juridica"), Column("Forma_Juridica"), Size(50), NotNull, QuickSearch]
        public String Juridica
        {
            get { return Fields.Juridica[this]; }
            set { Fields.Juridica[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.JuridicaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Juridica; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FormasJuridicasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field JuridicaId;
            public StringField Juridica;
        }
    }
}
