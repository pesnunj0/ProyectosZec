
namespace ProyectosZec.CuadroMandos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Proyectos"), Module("CuadroMandos"), TableName("sectores")]
    [DisplayName("Sectores"), InstanceName("Sectores")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("CuadroMandos.Sectores")]
    public sealed class SectoresRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sector Id"), Identity]
        public Int32? SectorId
        {
            get { return Fields.SectorId[this]; }
            set { Fields.SectorId[this] = value; }
        }

        [DisplayName("Sector"), Size(50), NotNull, QuickSearch]
        public String Sector
        {
            get { return Fields.Sector[this]; }
            set { Fields.Sector[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SectorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Sector; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SectoresRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SectorId;
            public StringField Sector;
        }
    }
}
