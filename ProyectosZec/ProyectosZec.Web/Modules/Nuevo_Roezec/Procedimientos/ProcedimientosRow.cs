
namespace ProyectosZec.Nuevo_Roezec.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Roezec"), Module("Nuevo_Roezec"), TableName("procedimientos")]
    [DisplayName("Procedimientos"), InstanceName("Procedimientos")]
    [ReadPermission("Roezec:Read")]
    [ModifyPermission("Roezec:Modify")]
    [LookupScript("Nuevo_Roezec.Procedimientos")]

    public sealed class ProcedimientosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Procedimiento Id"), Identity]
        public Int32? ProcedimientoId
        {
            get { return Fields.ProcedimientoId[this]; }
            set { Fields.ProcedimientoId[this] = value; }
        }

        [DisplayName("Procedimiento"), Size(100), NotNull, QuickSearch]
        public String Procedimiento
        {
            get { return Fields.Procedimiento[this]; }
            set { Fields.Procedimiento[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProcedimientoId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Procedimiento; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProcedimientosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProcedimientoId;
            public StringField Procedimiento;
        }
    }
}
