
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.KrsEmpleados")]
    [BasedOnRow(typeof(Entities.KrsEmpleadosRow), CheckNames = true)]
    public class KrsEmpleadosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink, DisplayName("Empleado"),Width(130)]
        public String Nombre { get; set; }
        [DisplayName("DNI"), Width(80)]
        public String CodigoValidacion { get; set; }
        [Width(70)]
        public Int32 Pin { get; set; }
        [Width(140)]
        public String Email { get; set; }
        [DisplayName("ClaveWeb"), Width(80)]
        public String ClaveAccesoWeb { get; set; }
 
    }
}