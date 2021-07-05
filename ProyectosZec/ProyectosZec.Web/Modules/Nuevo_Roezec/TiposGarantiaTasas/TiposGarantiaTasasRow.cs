
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("tipos_garantia_tasas")]
    [DisplayName("Tipos Garantia Tasas"), InstanceName("Tipos Garantia Tasas")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.TiposGarantiaTasas")]
    public sealed class TiposGarantiaTasasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Garantia Tasa Id"), Column("Tipo_Garantia_TasaId"), Identity]
        public Int32? GarantiaTasaId
        {
            get { return Fields.GarantiaTasaId[this]; }
            set { Fields.GarantiaTasaId[this] = value; }
        }

        [DisplayName("Garantia Tasa"), Column("Tipo_Garantia_Tasa"), Size(30), NotNull, QuickSearch]
        public String GarantiaTasa
        {
            get { return Fields.GarantiaTasa[this]; }
            set { Fields.GarantiaTasa[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GarantiaTasaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GarantiaTasa; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TiposGarantiaTasasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GarantiaTasaId;
            public StringField GarantiaTasa;
        }
    }
}
