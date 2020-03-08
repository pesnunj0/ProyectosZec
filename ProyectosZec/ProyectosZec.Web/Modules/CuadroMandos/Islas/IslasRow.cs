
namespace ProyectosZec.CuadroMandos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Proyectos"), Module("CuadroMandos"), TableName("islas")]
    [DisplayName("Islas"), InstanceName("Islas")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("CuadroMandos.Islas")]
    public sealed class IslasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Isla Id"), Identity]
        public Int32? IslaId
        {
            get { return Fields.IslaId[this]; }
            set { Fields.IslaId[this] = value; }
        }

        [DisplayName("Nombre Isla"), Size(20), NotNull, QuickSearch]
        public String NombreIsla
        {
            get { return Fields.NombreIsla[this]; }
            set { Fields.NombreIsla[this] = value; }
        }

        [DisplayName("Isla"), Size(3), NotNull]
        public String Isla
        {
            get { return Fields.Isla[this]; }
            set { Fields.Isla[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IslaId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.NombreIsla; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public IslasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IslaId;
            public StringField NombreIsla;
            public StringField Isla;
        }
    }
}
