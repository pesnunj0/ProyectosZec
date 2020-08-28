
namespace ProyectosZec.Inmovilizado.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inmovilizado.Proveedores")]
    [BasedOnRow(typeof(Entities.ProveedoresRow), CheckNames = true)]
    public class ProveedoresForm
    {
        public String Proveedor { get; set; }
        public String Contacto { get; set; }
        public String Telefono { get; set; }
        public String Email { get; set; }
    }
}