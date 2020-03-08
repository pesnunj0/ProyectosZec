
namespace ProyectosZec.CuadroMandos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Proyectos"), Module("CuadroMandos"), TableName("subsectores")]
    [DisplayName("Subsectores"), InstanceName("Subsectores")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("CuadroMandos.Subsectores")]
    public sealed class SubsectoresRow : Row, IIdRow, INameRow
    {
        [DisplayName("Subsector Id"), Identity]
        public Int32? SubsectorId
        {
            get { return Fields.SubsectorId[this]; }
            set { Fields.SubsectorId[this] = value; }
        }

        [DisplayName("SectorId"), Column("SectorId"), ForeignKey("Sectores", "SectorId"), LeftJoin("jSectores"),LookupInclude]
        //[LookupEditor(typeof(SectoresRow), InplaceAdd = true)]
         public Int32? SectorId
        {
            get { return Fields.SectorId[this]; }
            set { Fields.SectorId[this] = value; }
        }

        [DisplayName("Sector"), Expression("jSectores.[Sector]"),Size(30)]
        public String Sector
        {
            get { return Fields.Sector[this]; }
            set { Fields.Sector[this] = value; }
        }

        [DisplayName("Subsector"), Size(50), NotNull, QuickSearch]
        public String Subsector
        {
            get { return Fields.Subsector[this]; }
            set { Fields.Subsector[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SubsectorId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Subsector; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SubsectoresRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SubsectorId;
            public Int32Field SectorId;
            public StringField Sector;
            public StringField Subsector;
        }
    }
}
