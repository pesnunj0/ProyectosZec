
namespace ProyectosZec.Intranet.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Intranet.Telefonos")]
    [BasedOnRow(typeof(Entities.TelefonosRow), CheckNames = true)]
    public class TelefonosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight,Width(45)]
        public Int32 TelefonoId { get; set; }
        [Width(100), QuickFilter]
        public String Sede { get; set; }
        [Width(100), QuickFilter]
        public String Departamento { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String ExtCorta { get; set; }
        public String Fijo { get; set; }
        public String Movil { get; set; }
    }
}