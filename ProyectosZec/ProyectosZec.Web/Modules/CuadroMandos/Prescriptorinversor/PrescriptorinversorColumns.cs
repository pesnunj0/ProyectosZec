
namespace ProyectosZec.CuadroMandos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CuadroMandos.Prescriptorinversor")]
    [BasedOnRow(typeof(Entities.PrescriptorinversorRow), CheckNames = true)]
    public class PrescriptorinversorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PrescriptorInversorId { get; set; }
        [EditLink]
        public String PrescriptorInversor { get; set; }
    }
}