
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("naces")]
    [DisplayName("Naces"), InstanceName("Naces")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.Naces")]
    public sealed class NacesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Nace Id"), Identity]
        public Int32? NaceId
        {
            get { return Fields.NaceId[this]; }
            set { Fields.NaceId[this] = value; }
        }

        [DisplayName("Nace"), Size(30), NotNull, QuickSearch]
        public String Nace
        {
            get { return Fields.Nace[this]; }
            set { Fields.Nace[this] = value; }
        }

        [DisplayName("Codigo"), Size(5)]
        public String Codigo
        {
            get { return Fields.Codigo[this]; }
            set { Fields.Codigo[this] = value; }
        }

        [DisplayName("Descripcion"), Size(150), NotNull]
        public String Descripcion
        {
            get { return Fields.Descripcion[this]; }
            set { Fields.Descripcion[this] = value; }
        }

        [DisplayName("Subsector"), ForeignKey("subsectores", "SubsectorId"), LeftJoin("jSubsector"), TextualField("Subsector"), LookupInclude]
        [LookupEditor(typeof(Entities.SubsectoresRow), CascadeFrom = "SectorId", CascadeField = "SectorId")]
        public Int32? SubsectorId
        {
            get { return Fields.SubsectorId[this]; }
            set { Fields.SubsectorId[this] = value; }
        }

        [DisplayName("Sector Id"), Expression("jSubsector.[SectorId]"),ForeignKey("sectores","SectorId"),LeftJoin("jSector"),LookupInclude]
        [LookupEditor(typeof(Entities.SectoresRow))]
        public Int32? SectorId
        {
            get { return Fields.SectorId[this]; }
            set { Fields.SectorId[this] = value; }
        }

        [DisplayName("Subsector"), Expression("jSubsector.[Subsector]")]
        public String Subsector
        {
            get { return Fields.Subsector[this]; }
            set { Fields.Subsector[this] = value; }
        }

        [DisplayName("Sector"), Expression("jSector.[Sector]")]
        public String Sector
        {
            get { return Fields.Sector[this]; }
            set { Fields.Sector[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NaceId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descripcion; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NacesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field NaceId;
            public StringField Nace;
            public StringField Codigo;
            public StringField Descripcion;
            public Int32Field SubsectorId;

            public Int32Field SectorId;
            public StringField Subsector;
            public StringField Sector;
        }
    }
}
